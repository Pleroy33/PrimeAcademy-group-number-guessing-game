

// ! Require in Express.

const express = require('express');

// ! Require in Body-Parser
const bodyParser = require('body-parser')
// ! Require in Express.

// ! Create the server instance 
const app = express();

//! set the port to a number, avoid 5000 for new macs
const PORT = 5001;

// ! This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// ! Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// ! Create array to store resultes on the server 
let addGuess = [];
let randomNumber = 0;
// ! GET & POST Routes go here
app.post('/submit', (rec, res) => {

  console.log("POST on /", rec.body)//console log incoming guesses
  console.log("addGuess before push:", addGuess);//console.log addGuess before push 
  checkGuesses(rec.body)
  console.log(rec.body)
  addGuess.push(rec.body);//push incoming guesses into addGuess
  console.log("addGuess after push:", addGuess);//console log again to see that incoming guesses made it to addGuess
  res.sendStatus(201);//send http code for succes back to client

})

app.get('/guesses', (req, res) => {

  // When creating an endpoint first do a console log.
  console.log("Request for addGuess was made")

  // Responding will stop the code from running, similar to a return
  // res.sendStatus(200)
  res.send(addGuess)
})

// ! This code is responsible for making the actual server run.

app.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})

console.log('hello from randomNumber.js');
function getRandomInt(min, max) {
  console.log('get randomInt is working')
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return;
}
getRandomInt(1, 25);


function checkGuesses(input) {
  console.log('hi', input.player1.Guess)
  console.log('hi', input.player2.Guess)
  console.log('checkGuesses is running',input,randomNumber)
  if (input.player1.Guess == randomNumber) {
    console.log('winner')
  
     //let disabledSubmitGuess = document.getElementById("submitButton")
        // console.log('disabled button:', disabledSubmitGuess);
        // disabledSubmitGuess.disabled = true

  } 
  else if (input.player1.Guess < randomNumber) {
    input.player1.Guess.result = 'too low! Guess Again!'
    console.log(input.player1.Guess.result)
  }
  else if (input.player1.Guess > randomNumber)  {
    input.player1.result = 'too high! Guess Again!'
    console.log(input.player1.result)

  }

  if (input.player2.Guess == randomNumber) {
    input.player2.result= 'winner'
    console.log(input.player2.result)

  } 
  else if (input.player2.result < randomNumber) {
    input.player2.result = 'too low!! Guess Again'
    console.log(input.player2.result)

  }
  else if (input.player2.result > randomNumber)  {
    input.player2.result = 'too high Guess Again'
    console.log(input.player2.result)
  }

  console.log('new',input)
  return input
  }
  










