import express from 'express';
import bodyParser from 'body-parser';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(bodyParser.urlencoded())


app.post('/is-existing-email', (req, res) => {

  const existingEmails = ['sann@acorntech.us', 'george@acornetch.us'];

  // if provided email is in existing emails list return true
  // otherwise return  false

  console.log('req.body : ', req.body);

  res.json({ isExisitngEmail: true})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})