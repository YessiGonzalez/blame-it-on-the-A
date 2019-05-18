const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('This is my CodeSquad homework.'))

app.listen(port, () => console.log(`'Homework app listening on port ${port}!`))