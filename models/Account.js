const mongoose = require('mongoose');
const moment = require('moment');
const validator = require('validator');

const AccountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bank: {
      type: String,
      required: true,
    },
    accountNumber: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['true', 'false'],
      default: 'false',
    },
    date: {
      type: String,
      default: moment().format('YYYY-DD-MM'),
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Account', AccountSchema);
