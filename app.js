//38a7954fa4704ec8afb25426230908

// fetch('http://api.weatherapi.com/v1/current.json?key=38a7954fa4704ec8afb25426230908&q=Mexico',
// {mode: 'cors'} )
// .then(function(response){
//     console.table(response.json())
//     // return response.json()
// })
// .then(function(response){
//     // test.textContent = response.temp_c;

// })

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
getWeather()






