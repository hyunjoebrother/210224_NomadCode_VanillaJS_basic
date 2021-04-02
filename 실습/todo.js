// const(상수) 선언할 때 다른 파일이랑 이름 겹쳐서 바꾸자 (js모듈들을 분리시키도록)
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";


// filter에 쓰일 함수를 민들자 -> 괄호 안에 넣자
function filterFn(toDo) {
    // true만 return
    // return toDo.id === 1 // id가 1일 때
}


// HTML에서 ToDo를 지우기 위해 li 태그를 지우는 함수를 만들자
function deleteToDo(event) {
    //console.log(event.target.parentNode); // "Click"할 때 확인용
    const btn = event.target;
    const li = btn.parentNode; // 지워야 하는 li
    toDoList.removeChild(li);

    //const clearToDos = toDos.filter(filterFn);
    const clearToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); 
        // 모든 toDos가 li의 id와 같지 않을 때 + li의 id가 string이라 변환
    });
    // filter : array의 모든 아이템을 통해 함수를 실행하고, 
    // true인 아이템들만 가지고 새로운 array를 만든다
    //console.log(clearToDos); // 확인용

    // 이제 toDos를 clear하자
    toDos = clearToDos;
    saveToDos();
}



// 이제 본격적으로 화면 위에 띄워보자
// 먼저 ToDo 저장하자 - Array 형식으로 (시작은 empty)
//const toDos = [];
let toDos = [];

// toDos를 가져와서 local에 저장하는 함수를 만들자
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // 그리고 paintToDo에서 push다음에 함수 호출하자
    // object가 string이 되도록 만들자 by JSON.stringify
    // JSON (JS Object Notation)
    // : data 전달할 때 JS가 다루도록 object로 바꿔주는 기능
}

//parsedToDos에 있는 것들 각각에 대해 실행해줄 것이고, 그 각각을 toDos라고 정하자
// -> something 함수을 직접 괄호 내에 넣자
// function something(toDo) {
//     console.log(toDo.text);
// }


// local storage에서 정보를 가져옴
function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null) {
        //console.log(loadedToDos); // string식임
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos); // 변환 후에 확인용

        // 이제 Local Storage에서 불러온 parsedToDos를 화면에 paint(보여주기) - 우리 목표
        // 지금은 ToDos가 empty -> 모든 ToDo 항목에 paintToDo하자

        // forEach : Array에 담겨있는 것들 각각에 한번씩 함수를 실행시켜줌
        //parsedToDos.forEach(something);
        // parsedToDos에 있는 것들 각각에 대해 실행해줄 것이고, 그 각각을 toDos라고 정하자
        
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }

}

// ToDo 생성 -> HTML에서 li로 틀을 만들어주자
function paintToDo(text) { // submit함수에서 온 text 값
    // 확인용 console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerHTML = "❌"; // Emoji : windows + ;
    delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId; // li에도 newId에 이어서 id 할당해줌

    // 이제 span과 delBtn을 li 안에 넣자(append)
    toDoList.appendChild(li);

    // 마지막으로 li를 ul에 넣자(append)


    // 비어있는 Array를 채우기 위해 toDoObj를 만들자
    const toDoObj = {
        // text라는 key에 text가 value로 온다
        text : text,
        // id : toDos.length + 1 -> newId로 깔끔하게 정리해보자
        id : newId
    };
    toDos.push(toDoObj); // array 안에 element를 push
    // 결론은 'toDos' Array 안에 toDoObj를 넣는다

    // 그리고 paintToDo에서 push다음에 함수 호출하자
    saveToDos();
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

