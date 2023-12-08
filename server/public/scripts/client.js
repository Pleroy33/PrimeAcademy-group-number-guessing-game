function onReady() {
  console.log("JavaScript is loaded!")
}

function handlerGetGuesses() {
  axios({
      method: "GET",
      url: "/guesses"
  }).then((response)=> {
      console.log(' get is successful!!', response.data);

      document.getElementById('tabledata').innerHTML = `
      <table id="table data">${ JSON.stringify(response.data
        )}</table>`
  })
  .catch((error) =>{
      console.log("server error :(", error);

  })
}

roundCount=1;
function handlePostRequest(event) {
  console.log("handlePostSubmit has been clicked")
  event.preventDefault()

  
  
  //
  let name1 = document.getElementById('name1').value
  let guess1 = document.getElementById('guess1').value
  
  let name2 = document.getElementById('name2').value
  let guess2 = document.getElementById('guess2').value
  //console.log(name2, guess2)
  
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
  
  roundCount++;
  console.log('successfully submitted', response )
  
})
.catch((error) =>{
  console.log('error', error)
  
})

}

onReady()