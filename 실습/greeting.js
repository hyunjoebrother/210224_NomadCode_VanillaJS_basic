// 두 개의 플레이어를 선택하자
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    // CN : Class Name
    SHOWING_CN = "showing";


// 현재 user가 null이 아닐 때 색깔로 표시하는 함수를 만들자
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // 색칠할 때 form 숨기자
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// submit을 handle할 함수를 만들자
function handleSubmit(event) {
    event.preventDefault();

    const currentValue = input.value;
    // console.log(currentValue); // 확인용

    paintGreeting(currentValue);

    saveName(currentValue);
}

// 마지막으로 새로고침해도 이름을 저장하는 함수를 만들자
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

// 현재 user가 null일 때 user의 이름을 요청하는 함수를 만들자
function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}




// local storage에서 정보를 가져옴
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    // local storage에 user 유무에 따라 case 나눠보자
    if(currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


// 먼저 init 함수 세팅
function init() {
    loadName();
}

init();
