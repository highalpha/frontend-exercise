const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apps = require('./fixtures/apps.json')

const app = express()
const port = 3001

app.options('*', cors())
app.use(cors())
app.use(bodyParser.json())

app.get('/applications', (req, res) => {
  console.log('GET /applications')
  res.json(apps)
})

app.post('/applications', (req, res) => {
  const newApp = req.body

  console.log('POST /applications BODY:\n', newApp)

  // Perform basic validation
  if (!newApp.name
    || !newApp.type
    || !newApp.resources
    || !newApp.resources.requested
    || !newApp.resources.requested.cpu
    || !newApp.resources.requested.mem) {
    return res.status(400).send("BadRequest")
  }

  // Set server generated props
  newApp.id = apps.data.length + 1
  newApp.createdOn = Date.now()

  // Persist addition locally
  apps.data = apps.data.concat(newApp)

  res.json({ app: newApp })
})

app.listen(port, '127.0.0.1', () => {
  console.log(`App listening on 127.0.0.1:${port}`)
})