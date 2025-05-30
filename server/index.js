import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
const app = express()
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded()


app.post('/is-existing-email', jsonParser, (req, res) => {

  const existingEmails = ['sann@acorntech.us', 'george@acorntech.us'];

  const email = req.body.email;

  if (!email) res.json({
    status: 'failed',
    message: 'Invaid email'
  });


  const isExisitngEmail = existingEmails.includes(email);

  // if provided email is in existing emails list return true
  // otherwise return  false

  console.log('req.body : ', req.body);

  res.json({ isExisitngEmail: isExisitngEmail })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})