const { getEvents, addEvent } = require('../services/event-service')

async function getEventHandler(req, res){
  let result = await getEvents()
  res.send({data : result})
}

async function addEventHandler(req,res) {
  let result = await addEvent(req.body)
  res.send(result)
}

module.exports = {
  getEventHandler,
  addEventHandler
}