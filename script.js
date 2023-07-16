//Cached UI Variables
const apiKey = 'a7781965288f4e048db144842230907'
const button = document.querySelector('button')
const weatherInput = document.querySelector('input')

//Event Handlers

//Event Listenener
button.addEventListener('click', async () => {
//
const response = await axios.get(
    'https://www.weatherapi.com/docs/#', {
    //'https://www.weatherapi.com/docs/#', {
        params: {
            key: apiKey,
            q: weatherInput.value
        }
        }

    ).then(response => response.data)

console.log("City = ", weatherInput.value)
console.log("Response = ",response)
//console.log("Response Body Location = ", response.body['location'])
//console.log("Response = ", response)   
//console.log("Response Data = ", response.data)
 //   axios.get('http://www.url.com/api/endpoint', {
 // params: {
  //  id: 1,
 //   name: Brian
 // }
//})

//console.log("Response-data-message =", weatherResult)
//onsole.log("Temperature in Fahrenheit = ", )


})  