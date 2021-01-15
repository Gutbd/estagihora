const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// @route   GET api/auth
// @desc    Get auth user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user and get token
// @access  Public
router.post(
  "/",
  [
    check("email", "Informe um e-mail válido").isEmail(),
    check("password", "Senha deve ter no mínimo 6 caracteres").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // verify user already exists (email is unique)
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "E-mail ou senha inválidos." }] });
      }

      // make sure password match
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "E-mail ou senha inválidos." }] });
      }

      // return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      // JWT sign returning users token
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: config.get("jwtExpiresIn") },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(500).json({ errors: [{ msg: error.message }] });
    }
  }
);

module.exports = router;
