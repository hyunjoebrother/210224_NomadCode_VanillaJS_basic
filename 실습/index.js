// JS 파일은 항상 body 태그 밑에 있어야 함

//alert('Hello World!');
//console.log('Hello World!');

/*
const MeiInfo = {
    name : "Mei",
    age : 24,
    gender : "Female",
    inHandsome : true
}

console.log(MeiInfo.age)

// 함수 정의
function sayHello() {
    console.log('Hello!');
}
*/


// // Argument 사용
// function sayHello(potato, age) {
//     console.log('Hello!', potato, "youre", age);
// }

// //sayHello();
// sayHello("Mei", 17);
// console.log("Hi")

// function sayHello(name, age)
// {
//     //console.log(`Hello ${name} you are ${age} years old`);
//     return `Hello ${name} you are ${age} years old`;
// }

// //sayHello("Mei", 17);
// const greetMei = sayHello("Mei", 17)

// console.log(greetMei)

// const calcualtor = {
//     plus: function(a, b)
//     {
//         return a+b;
//     }
// }

// const plus = calcualtor.plus(5, 10)
// console.log(plus)


//// JS에서 id (title) 선택하기
//const title = document.getElementById("title");

// const title = document.querySelector("#title");
// // querySelector : 노드의 첫번째 자식을 반환return (#는 id, .는 class)

// console.log(title);

// //console.error("fuck");

// //title.innerHTML = "Hi From JS";
// //title.style.color = 'red';

// //document.title = 'I own you';

// function handleResize() {
//     console.log("I have been resized")
// }

// function handleClick() {
//     title.style.color = "red";
// }

// //window.addEventListener("resize", handleResize); // 함수 호출
// title.addEventListener("click", handleClick);

// if(10 === 5) {
//     console.log('hi');
// } else if ("10" === "10") {
//     console.log('lol');
// } else {
//     console.log("ho");
// }


// const age = prompt("How old r u?");
// //console.log(age);

// if (age > 20 && age < 24) {
//     console.log("u can drink");
// } else {
//     console.log("Nope");
// }


// const title = document.querySelector("#title");
// // // querySelector : 노드의 첫번째 자식을 반환return (#는 id, .는 class)

// const BASE_COLOR = "#34495e";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     //console.log(title.style.color); // title을 click할 때 색을 알 수 있음
//     //title.style.color = "red";

//     const currentColor = title.style.color;

//     if(currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// // if-else 이런거 귀찮으니까 초기화 함수를 만들자
// function init() {
//     title.style.color = BASE_COLOR;
//     //title.addEventListener("click", handleClick);
//     title.addEventListener("mouseenter", handleClick);
//     //// click, mouseenter... 이런 event : MDN에서 검색하기
// }
// init();

// // MDN에서 아무거나 검색해봄 - 오프라인일 때도 가능
// function handleOffline() {
//     console.log("OFFLINE");
// }

// function handleOnline() {
//     console.log("ONLINE");
// }

// window.addEventListener("offline", handleOffline)
// window.addEventListener("online", handleOnline)


const title = document.querySelector("#title");
// querySelector : 노드의 첫번째 자식을 반환return (#는 id, .는 class)

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;

    if(currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();