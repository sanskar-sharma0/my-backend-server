const express = require('express');
const app = express();

// DEPLOYMENT SETTING: Internet ka port ya fir hamara 3000
const port = process.env.PORT || 3000; 

// SERVER KO BATAO: CSS aur Images 'public' folder mein hain
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); 
});

// Jab data submit ho
app.post('/submit-data', (req, res) => {
  const userKaNaam = req.body.userName; 
  res.send(`<h1>Hello ${userKaNaam}! Aapka data backend tak pahunch gaya! 🎉</h1>`);
});

// Server Start
app.listen(port, () => {
  console.log(`Server port ${port} par chal raha hai`);
});