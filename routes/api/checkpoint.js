const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const config = require('config');

const Checkpoint = require('../../models/Checkpoint');

// @route   GET api/checkpoint
// @desc    Get all checkpoints from a user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = req.user.id;
    const checkpoints = await Checkpoint.find({ user });

    res.send(checkpoints);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

// @route   POST api/checkpoint
// @desc    Create a checkpoint
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const user = req.user.id;

    // Avoid two checkpoints too close
    const minimalInterval = config.get('checkpointMinimalInterval');

    var dateLimit = new Date();
    dateLimit.setMinutes(dateLimit.getMinutes() - minimalInterval);

    const recentCheckpoint = await Checkpoint.findOne({
      user,
      date: { $gte: dateLimit },
    });
    if (recentCheckpoint) {
      return res.status(400).json({
        msg: `Aguarde um intervalo de ${minimalInterval} minuto(s) entre batidas.`,
      });
    }

    // Create Checkpoint
    let now = new Date();
    let cheackpoint = new Checkpoint({ user, date: now });
    await cheackpoint.save();

    res.json(cheackpoint);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
