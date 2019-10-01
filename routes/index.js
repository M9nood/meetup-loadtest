const EventController = require('../controllers/event-controller')

function router(app) {
  app.get('/' , (req,res) => {
    res.send('api active')
  })

  app.get('/event', EventController.getEventHandler)
  app.post('/event', EventController.addEventHandler)



  
}

module.exports = {
  router
}