


const container = document.querySelector('#container')

let apiUrl =  
    'http://api.weatherapi.com/v1/current.json?key=38a7954fa4704ec8afb25426230908&q=Mexico'

async function getWeather(){
    const response = await fetch
        (apiUrl,
        {mode: 'cors'} );
    response.json()
    .then(function(response) {
        console.table(response)
        const tempC = response.current.temp_c;
        const cityName = response.location.name;
        const country = response.location.country;
        const condition = response.current.condition.text;
        const icon = response.current.condition.icon

        dataDisplay.textContent = `${cityName} ${tempC} Celsius ${condition} `
        // dataDisplay.appendChild(icon)
    })  
}

const btn = document.querySelector('button')
btn.style.background =  "url('./img/sayuFace.jpg')"
btn.style.backgroundSize = 'contain'
btn.style.height = '200px'
btn.style.width = '200px'

btn.addEventListener('click', ()=>{
   getWeather()
   
    
})

//data
const data = document.querySelector('.dataContainer')
const dataDisplay = document.querySelector('.tempDisplay')
data.appendChild(dataDisplay)


//input text
const input = document.querySelector('#search')
search.style.border = 0

