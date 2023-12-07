function onReady() {
  console.log("JavaScript is loaded!")
}

function handlerGetQuotes() {
  axios({
      method: "GET",
      url: "/guesses"
  }).then((response)=> {
      console.log('success!!', response.data);

      document.getElementById('').innerHTML = `
      <div>${ JSON.stringify(response.data)}</div>`
  })
  .catch((error) =>{
      console.log("server error :(", error);

  })
}
handlerGetQuotes();

function handlePostRequest() {
  console.log("handlePostSubmit has been clicked")

  axios({
  method: 'POST',
  url: '/submit',
  data: {
      quoteToAdd: {
          Name: 'Paul',
          Guess: '13'

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