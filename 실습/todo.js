// const(상수) 선언할 때 다른 파일이랑 이름 겹쳐서 바꾸자 (js모듈들을 분리시키도록)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const USER_LS = "currentUser";



// local storage에서 정보를 가져옴
function loadToDos() {
    const currentUser = localStorage.getItem(USER_LS);

}


// 먼저 init 함수 세팅
    function init() {
        loadToDos();
}
init();

