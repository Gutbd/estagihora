const mongoose = require('mongoose');

const CheckpointSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
  },
});

module.exports = Checkpoint = mongoose.model('Checkpoint', CheckpointSchema);
