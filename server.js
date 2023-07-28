const express = require('express');
const fs=require('fs')
const path = require('path');

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'db/db.json'))
);

app.post('/api/notes', (req, res) =>{
console.log("app.post",req.body)
fs.readFile('db/db.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    const parsedData = JSON.parse(data);
    console.log(parsedData, req.body)
    // parsedData.push(content);
    // writeToFile(file, parsedData);
  }
});
})


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);