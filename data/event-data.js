const EventModel = require('./models/event-model')

function getEvents () {
  return  EventModel.find({}, function(err, events) {
    var eventMap = {};
    events.forEach(function(event) {
      eventMap[event._id] = event;
    });

    return eventMap  
  });
}

async function addEvent(request){
  return EventModel.create(request).then(c =>  c ? c.toObject() : null)
}

module.exports = {
  getEvents,
  addEvent
}