const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../../middleware/auth");

const config = require("config");
const startOfDay = require("date-fns/startOfDay");
const endOfDay = require("date-fns/endOfDay");

const Checkpoint = require("../../models/Checkpoint");

// @route   GET api/checkpoint
// @desc    Get all checkpoints from a user grouped by day
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = req.user.id;
    const checkpoints = await Checkpoint.aggregate([
      { $match: { user: mongoose.Types.ObjectId(user) } },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          dates: { $push: "$date" },
        },
      },
    ]);

    res.send(checkpoints);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

// @route   GET api/checkpoint/today
// @desc    Get all checkpoints from a user filter by today
// @access  Private
router.get("/today", auth, async (req, res) => {
  try {
    const user = req.user.id;
    const now = new Date();

    const checkpoints = await Checkpoint.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(user),
          date: { $gte: startOfDay(now), $lte: endOfDay(now) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          dates: { $push: "$date" },
        },
      },
    ]);

    res.send(checkpoints);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
});

// @route   POST api/checkpoint
// @desc    Create a checkpoint
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const user = req.user.id;

    // Avoid two checkpoints too close
    const minimalInterval = config.get("checkpointMinimalInterval");

    var dateLimit = new Date();
    dateLimit.setMinutes(dateLimit.getMinutes() - minimalInterval);

    const recentCheckpoint = await Checkpoint.findOne({
      user,
      date: { $gte: dateLimit },
    });
    if (recentCheckpoint) {
      return res.status(400).json({
        errors: [
          {
            msg: `Aguarde um intervalo de ${minimalInterval} minuto(s) entre batidas.`,
          },
        ],
      });
    }

    // Create Checkpoint
    let now = new Date();
    let checkpoint = new Checkpoint({ user, date: now });
    await checkpoint.save();

    // Return updated list
    const checkpoints = await Checkpoint.aggregate([
      {
        $match: {
          user: mongoose.Types.ObjectId(user),
          date: { $gte: startOfDay(now), $lte: endOfDay(now) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          dates: { $push: "$date" },
        },
      },
    ]);

    res.json(checkpoints);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
