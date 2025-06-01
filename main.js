const CITY = 'Kyiv'
const API_KEY = 'e4814e620aabffc16dc7a5f7e131bf05'

const container = document.querySelector('.container');

const parseDateTime = (dateTimeValue) => {
    let dateTime;

    if (typeof dateTimeValue === 'object') {
        const {sunrise} = dateTimeValue
        dateTime = new Date(sunrise * 1000);
    } else {
        dateTime = new Date(dateTimeValue * 1000);
    }

    const hours = dateTime.toLocaleString('default', { hour: '2-digit' })
    const minutes = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

    const day = dateTime.getDate();
    const monthLong = dateTime.toLocaleString('default', { month: 'long' });
    const monthShort = dateTime.toLocaleString('default', { month: 'short' });
    const year = dateTime.getFullYear();
    const weekDay = dateTime.toLocaleString('default', { weekday: 'long' });


    return {hours, minutes, day, year, weekDay, monthShort, monthLong}
}

function createDateTimeBlock (dateTimeValue, sunriseValue) {
    const dateTimeBlock = document.createElement('div');
    dateTimeBlock.classList.add('date-time');

    const {hours, minutes, day, monthLong, year, weekDay} =
        parseDateTime(dateTimeValue);
    const {hours: sunriseHours, minutes: sunriseMinutes} = parseDateTime(sunriseValue);

    dateTimeBlock.innerHTML = `
        <div>
            <div>${day} ${monthLong} ${year} року - ${weekDay}</div>
            <div>Схід сонця: ${sunriseHours}:${sunriseMinutes}</div>
        </div>
        <div class="time">${hours}:${minutes}</div>
    `

    return dateTimeBlock;
}

function getWindDirectionStr (deg) {
    if (deg === 0) {
        return 'Пн'
    } else if (deg > 0 && deg < 90) {
        return 'Пн-Сх'
    } else if (deg === 90) {
        return 'Сх'
    } else if (deg > 90 && deg < 180) {
       return  'ПдСх'
    } else if (deg === 180) {
        return 'Пд'
    } else if (deg > 180 && deg < 270) {
        return 'ПдЗх'
    } else if (deg === 270) {
        return 'Зх'
    } else if (deg > 270 && deg < 359) {
        return 'ПнЗх'
    }
}

function createAtmosphericBlock (data, wind) {
    const atmosphericBlock = document.createElement('div');
    atmosphericBlock.classList.add('atmopheric');

    const {pressure, humidity} = data;
    const {speed, deg} = wind;
    const windDirection = getWindDirectionStr(deg);
    atmosphericBlock.innerHTML = `
        <div>
            <div class="humidity">Вологість: ${humidity}%</div>
            <div class="pressure">Атмосферний тиск: ${pressure} pHa</div>
        </div>
        <div>Вітер ${speed} км/год ${windDirection}</div>
    `;

    return atmosphericBlock;
}

function createWeatherIconBlock (weatherData) {
    const weatherIcon = document.createElement('div');
    const {icon, description } = weatherData;

    weatherIcon.innerHTML =
        `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">`;

    return weatherIcon;
}

function createWeatherBlock (weatherData, mainData) {
    const temperatureBlock = document.createElement('div');
    temperatureBlock.classList.add('temperature');

    const {temp, feels_like} = mainData;
    const {description} = weatherData;
    temperatureBlock.innerHTML = `
        <div>${Math.floor(temp)}°</div>
        <div>Відчувається як: ${Math.floor(feels_like)}°</div>
        <div>${description}</div>
    `

    return temperatureBlock;
}

function createDateAndRefreshBlock (dateTimeValue) {
    const dateAndRefresh = document.createElement('div');
    dateAndRefresh.classList.add('date-and-refresh');

    const {monthShort, day, hours, minutes} = parseDateTime(dateTimeValue);
    dateAndRefresh.innerHTML = `
        <div> ${monthShort} ${day} ${hours}:${minutes} </div>
        <button id="refresh">Оновити</button>
    `
    return dateAndRefresh;
}

function renderWeatherWidget (data) {
    const leftSide = document.createElement('div');
    const rightSide = document.createElement('div');

    leftSide.classList.add('left-side');
    rightSide.classList.add('right-side');

    const {dt, main, sys, wind} = data
    const dateBlock = createDateTimeBlock(dt, sys)
    const atmosphericBlock = createAtmosphericBlock(main, wind);

    [dateBlock, atmosphericBlock].forEach(block => leftSide.appendChild(block))

    const {weather} = data;
    const weatherIconBlock = createWeatherIconBlock(weather[0]);
    const weatherBlock = createWeatherBlock(weather[0], main);
    const dateTimeAndRefresh = createDateAndRefreshBlock(dt, sys);

    [weatherIconBlock, weatherBlock, dateTimeAndRefresh]
        .forEach(block => rightSide.appendChild(block));

    [leftSide, rightSide].forEach(block => container.appendChild(block))
}

function getWeatherData (city, apiKey) {
    container.innerHTML = '';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`)
        .then(response => response.json())
        .then(data => {
            renderWeatherWidget(data)

            document.querySelector('#refresh').addEventListener('click', () => {
                getWeatherData(city, apiKey)
            })

        })
        .catch(error => console.error(error))
}

getWeatherData(CITY, API_KEY)