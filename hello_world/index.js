// console.log('Hello World!')

// console.log(3000 * 2);
// console.log(4200 * 4 + 4800 * 2);
// console.log(4200 + 4800);
// console.log(3000 + 4200 * 4 + 4800 * 2);
// console.log(4200 * 3);

// 변수 선언
// let espressoPrice;
// espressoPrice = 3000;

let espressoPrice = 3000;
let lattePrice = 4300;
let mochaPrice = 4800;

console.log(espressoPrice * 2);
console.log(lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice + mochaPrice);
console.log(espressoPrice + lattePrice * 4 + mochaPrice * 2);
console.log(lattePrice * 3);


// 함수 선언
function greetings() {
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
};

//함수 호출
greetings();

// 함수 선언
function greetings(sentence) {
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
    console.log(sentence);
};

//함수 호출
greetings('hola');


function welcome (name) {
    console.log('안녕하세요 ' + name + '님!')
}

welcome('전다운');
welcome('홍길동');
welcome('아무개');


function printSquare(x) {
    console.log(x*x);
}

printSquare(4);
printSquare(2);
printSquare(16);

function printSum(a,b) {
    console.log(a+b);
}

printSum(5, 15);