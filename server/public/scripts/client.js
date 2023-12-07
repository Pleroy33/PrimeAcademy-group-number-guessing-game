function onReady() {
  console.log("JavaScript is loaded!")
}

function handlerGetGuesses() {
  axios({
      method: "GET",
      url: "/guesses"
  }).then((response)=> {
      console.log(' get is successful!!', response.data);

      document.getElementById('previousGuesses').innerHTML = `
      <div>${ JSON.stringify(response.data)}</div>`
  })
  .catch((error) =>{
      console.log("server error :(", error);

  })
}
handlerGetGuesses();

function handlePostRequest(event) {
  console.log("handlePostSubmit has been clicked")
  event.preventDefault()

  roundCount = 1
  //
  let name1 = document.getElementById('name1').value
  let guess1 = document.getElementById('guess1').value
  
  let name2 = document.getElementById('name2').value
  let guess2 = document.getElementById('guess2').value
  console.log(name2, guess2)

  axios({
  method: 'POST',
  url: '/submit',
  data: {
      RoundCount: roundCount,
      player1: 
      {
          Name: name1,
          Guess: guess1

      },
      player2:
      {
        Name: name2,
        Guess: guess2
      }
  }
})
.then((response) =>{
  console.log('successfully submitted', response )
  
})
.catch((error) =>{
  console.log('error', error)
  
})
}

onReady()