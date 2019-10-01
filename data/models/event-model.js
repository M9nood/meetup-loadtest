const mongoose = require('mongoose')

const eventModel = new mongoose.Schema({
  title: String,
  event_dt: {
    type: Date,
    index: true
  },
  limit : Number,
  joiner: {
    type : Array,
    default : []
  }
}, { timestamps: true })

module.exports = mongoose.model('events', eventModel)