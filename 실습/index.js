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

const title = document.querySelector("#title");
// querySelector : 노드의 첫번째 자식을 반환return (#는 id, .는 class)

console.log(title);

//console.error("fuck");

title.innerHTML = "Hi From JS";
title.style.color = 'red';

document.title = 'I own you';

