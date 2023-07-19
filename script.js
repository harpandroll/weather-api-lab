//Cached UI Variables
const apiKey = 'ed7a93a35e9c49c3864131508231707'
const button = document.querySelector('button')
const weatherInput = document.querySelector('input')
const city = document.querySelector('#cityName')
const temp = document.querySelector('#temp')


//Event Handlers

//Event Listenener
button.addEventListener('click', async () => {
    let requestedCity = weatherInput.value
   //let city = requestedCity

//Call the weatherapi using the base url and API method for current weather
    const response = await axios.get(
        'http://api.weatherapi.com/v1/current.json', {

      params: {
            key: 'ed7a93a35e9c49c3864131508231707',
            q: weatherInput.value,
            aqi: 'no'
            }
        })
   // Capture pertinent weather information
   
   //const temperature = response.data.current.temp_f;
   //temp.textContent = temperature;
   city.textContent = requestedCity
   temp.textContent = response.data.current.temp_f;
   const feelslike = response.data.current.feelslike_f;
   const humidity = response.data.current.humidity;
      

console.log("City = ", requestedCity)
//console.log("Temperature = ", temperature)
console.log("Feels Like = ", feelslike)
console.log("Humidity = ", humidity)
console.log("city #cityName =", city)

})


