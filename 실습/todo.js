// const(상수) 선언할 때 다른 파일이랑 이름 겹쳐서 바꾸자 (js모듈들을 분리시키도록)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



// local storage에서 정보를 가져옴
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);

    if(toDos !== null) {

    }

}

function paintToDo(text) {
    
}



// submit을 handle할 함수를 만들자
function handleSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    // 그리고 paintToDo 함수를 만들자

}

// 먼저 init 함수 세팅
    function init() {

        loadToDos();
        // toDo를 생성하자
        toDoForm.addEventListener("submit", handleSubmit);
        // submit를 handle할 함수를 만들자
}
init();

