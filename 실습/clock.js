const clockContainer = document.querySelector(".js-clock"); // .은 class
const clockTitle = clockContainer.querySelector("h1"); // 깔끔하게 const 하나를 사용해서 쉼표 처리도 가능

function getTime() {
    // date는 class
    const date = new Date(); // object 개념
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 객체 안에 text 넣자
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
    // 하지만 아직 새로고침을 해야함 ㅇㅇ 실시간 반영이 아니다 ㅠㅠ
}


// 먼저 init 함수 세팅
function init() {
    // 현재 시각을 얻자
    getTime();
}
init();