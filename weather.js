let temp = document.querySelector('#temp');
let update_date = document.querySelector('#update-date');
let local_date = document.querySelector('#local-date');
let image = document.querySelector('.img-block');

setInterval(() => {
    let date = new Date;
    local_date.textContent = `Местное время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}, 1000)

async function getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Saint Petersburg&appid=d982b206b7125a363d94918d08ebf560`);
    const data = await response.json();
    image.innerHTML = `<img src="http://openweathermap.org/img/w/` + data.weather[0].icon + `.png ">`;
    temp.textContent = `${temperature()}°`;
    function temperature()
    {
        let getTemp = data.main.temp
        let tempC = Math.floor(getTemp) - 273;
        return tempC
    }
    let date = new Date;
    update_date.textContent = `Последнее обновление: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log('перезапуск');
}
getWeather();

setInterval(() => {
    getWeather();
}, 3600000) //Обновляет информацию каждый час