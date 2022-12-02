
const images = [
    {
        image: './images/haze.jpg'
    }, {
        image: './images/cloudy.jpg'
    }, {
        image: './images/rain.jpg'
    }, {
        image: 'images/winter(1).jpg'
    }
]

const inputVal = document.getElementById('inputField');
const form = document.querySelector('form');
let cityName = document.querySelector('h1');




form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let search = inputVal.value;
    cityName.innerText = search;
    let ApiKey = 'c8e6dbac22a80fb604d5393ddc0ba513'
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKey}&units=metric`
    const response = await fetch(url);
    const responseData = await response.json();
    let weatherType=responseData.weather[0].main;
    let temp = document.querySelector('h2').innerText = `${responseData.main.temp}°C`;
    let img = document.querySelector('img').src = `https://openweathermap.org/img/wn/${responseData.weather
    [0].icon}@2x.png`;
   



})
