const COORDS = 'coords'; // load를 위한 string 상수



function handleGeoSuccess(poistion) {
    console.log(poistion);
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