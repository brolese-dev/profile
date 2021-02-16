const express = require('express')
var { Liquid } = require('liquidjs')
const path = require('path')

const app = express()
var engine = new Liquid({
  // cache: true
})

app.engine('liquid', engine.express())
app.set('views', './views')
app.set('view engine', 'liquid')

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index')
})

const server = app.listen(3010, () => {
  console.log(`The application started on port ${server.address().port}`)
});
