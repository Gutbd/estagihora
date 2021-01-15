const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // Name
  name: {
    type: String,
    required: true,
  },

  // Email
  email: {
    type: String,
    required: true,
    unique: true,
  },

  // Password
  password: {
    type: String,
    required: true,
  },
});

// Email must be unique
UserSchema.statics = {
  isUniqueEmail(email) {
    return this.findOne({ email }).then((result) => {
      if (result) throw new Error("E-mail já cadastrado");
    });
  },
};

module.exports = User = mongoose.model("User", UserSchema);
