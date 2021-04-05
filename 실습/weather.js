// Weather API keys
const API_KEY = "29baafed271866a19dc977306e8c98bd";

const COORDS = 'coords'; // load를 위한 string 상수

const weather = document.querySelector(".js-weather");



function getWeather(lat, lng) {
    // fetch를 통해 data를 얻는다 -> 링크에 lat, lng 등 추가해야함
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        //console.log(response.json()); 대기중인거 확인용 - 바로 하고 싶으면 또 then 쓰기
        return response.json();
    })
    .then(function(json) {
        //console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`; // 화면에 짜잔
    });
}



// 좌표 저장 함수
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
} 

function handleGeoSuccess(position) {
    //console.log(poistion);

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // 좌표 객체 코드
    const coordsObj = {
        // latitude: latitude,
        // longitude: longitude
        // 객체의 변수 이름과 key의 이름을 같게 저장할 때는 그냥 하나만 체크!
        latitude,
        longitude
    };

    // 저장한 죄표 함수 호출
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}


function handleGeoError() {
    console.log("Cant access geo location"); // 위치 정보를 읽을 수 없음 ㅅㄱ
}




// 죄표 요청 함수 - navigator API 사용
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, ); // 2개 함수 만들어서 넣자

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);

    if (loadedCoords === null) {
        // null이면 좌표를 요청하는 함수 호출하자
        askForCoords();
    } else {
        // getWeather 함수 호출
        const parsedCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}



function init() {
    loadCoords();
}
init();