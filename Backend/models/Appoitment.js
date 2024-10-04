const mongoose = require('mongoose');


const AppointmentSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Appointment date is required'],
  },
  time: {
    type: String,
    required: [true, 'Appointment time is required'],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User schema
    required: [true, 'User ID is required'],
  },
  createdFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'doctor', // Refers to the Doctor schema
    required: [true, 'Doctor ID is required'],
  },
  description: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled', 'Completed'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
