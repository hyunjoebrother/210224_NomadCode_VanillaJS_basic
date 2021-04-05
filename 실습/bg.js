const body = document.querySelector("body");

const IMG_NUMBER = 3; // image 갯수


function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`; // src : images 폴더

    image.classList.add("bgImage"); // Image css 수정하기 위해 class 만들어줌

    body.appendChild(image);
}


// 숫자 랜덤 생성 함수를 만들자
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();