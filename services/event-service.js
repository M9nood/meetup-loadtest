const EventData = require('../data/event-data')
const ItemData = require('../data/item-data')

async function getEvents(){
  const result = await EventData.getEvents()
  return result
}

async function addEvent(request){
  const result = await EventData.addEvent(request)
  return result
}


module.exports = {
  getEvents,
  addEvent
}