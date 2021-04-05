const COORDS = 'coords'; // load를 위한 string 상수

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
    }
}



function init() {
    loadCoords();
}
init();