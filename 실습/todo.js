// const(상수) 선언할 때 다른 파일이랑 이름 겹쳐서 바꾸자 (js모듈들을 분리시키도록)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";



// local storage에서 정보를 가져옴
function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);

    if(toDos !== null) {

    }

}

// ToDo 생성 -> HTML에서 li로 틀을 만들어주자
function paintToDo(text) {
    // 확인용 console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = "";
    const span = document.createElement("span");
    span.innerText = text;
}



// submit을 handle할 함수를 만들자
function handleSubmit(event) {
    event.preventDefault();

    const currentValue = toDoInput.value;
    // 그리고 paintToDo 함수를 만들자
    paintToDo(currentValue);

    // enter누르면 입력창에 내가 쓴 내용 사라지도록 하자
    toDoInput.value = "";


}

// 먼저 init 함수 세팅
    function init() {

        loadToDos();
        // toDo를 생성하자
        toDoForm.addEventListener("submit", handleSubmit);
        // submit를 handle할 함수를 만들자
}
init();

