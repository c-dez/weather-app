//38a7954fa4704ec8afb25426230908 BORRAR!


const container = document.querySelector('#container')
const test = document.createElement('div')
container.appendChild(test)
test.classList.add('.test')

async function getWeather(){
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=38a7954fa4704ec8afb25426230908&q=Mexico',
        {mode: 'cors'} );
    response.json().then(function(response) {
        console.table(response)
        dataDisplay.textContent = response.current.temp_c +' C'
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




