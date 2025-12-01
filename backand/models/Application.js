const mongoose = require('mongoose');
const { Schema } = mongoose;

const applicationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'rejected', 'shortlisted'],
    default: 'pending'
  },
  appliedDate: {
    type: Date,
    required: true
  },
deadline: {
  type: Date,
  required: true,
  validate: [
    {
      validator: function(value) {
        return value > this.appliedDate;
      },
      message: "Deadline must be after applied date"
    },
    {
      validator: function(value) {
        return value > new Date();
      },
      message: "Deadline cannot be in the past"
    }
  ]
}
});

module.exports = mongoose.model("application", applicationSchema);
