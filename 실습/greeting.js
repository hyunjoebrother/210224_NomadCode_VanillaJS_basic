// 두 개의 플레이어를 선택하자
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    // Class Name
    SHOWING_CN = "showing";


// 현재 user가 null이 아닐 때 색깔로 표시하는 함수를 만들자
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // 색칠할 때 form 숨기자
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// local storage에서 정보를 가져옴
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);

    // local storage에 user 유무에 따라 case 나눠보자
    if(currentUser === null) {

    } else {
        paintGreeting(currentUser);
    }
}


// 먼저 init 함수 세팅
function init() {
    loadName();
}
init();
