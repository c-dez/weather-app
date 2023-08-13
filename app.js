//38a7954fa4704ec8afb25426230908


const container = document.querySelector('#container')
const test = document.createElement('div')
container.appendChild(test)
test.classList.add('.test')

async function getWeather(){
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=38a7954fa4704ec8afb25426230908&q=Mexico',
        {mode: 'cors'} );
    response.json().then(function(response) {
        console.table(response)
        test.textContent = response.current.temp_c
    })    
}
// getWeather()
const btn = document.querySelector('button')
const imgFace = "url('./img/sayuFace.jpg')"

btn.style.background = imgFace
btn.style.backgroundSize = 'contain'
btn.style.height = '200px'
btn.style.width = '200px'







