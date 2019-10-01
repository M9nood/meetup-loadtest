const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes')
const { setup } = require('./connections/setup')

app.use(bodyParser.json())
routes.router(app)


const port = 3001

setup()
  .then(() => app.listen(port, () => console.log(`App listening on port ${port}!`)));