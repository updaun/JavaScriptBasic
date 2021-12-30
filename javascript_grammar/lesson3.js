// 할당 연산자  = (Assignment operations)
let name = 'updaun'
let x = 5;
console.log(x);
x = x - 2; 
console.log(x);


// 함수의 실행 순서
function sayHello() {
    console.log("Hello");
    console.log("Welcome to JavaScript!")
}

console.log("함수 호출 전");
sayHello();
console.log("함수 호출 후");

function square(x) {
    console.log("return 전");
    return x*x;    
    console.log("return 후"); //Dead Code
}

console.log("함수 호출 전");
console.log(square(5));
console.log("함수 호출 후");


// optional 파라미터
function sayHello(x) {
    console.log(`Welcome to JavaScript! ${x}`);  
}
sayHello(); // x값을 입력하지 않으면 undefined 로 나온다.

function introduce(name, age, nationality='한국') {
    console.log(`제 이름은 ${name}입니다.`)
    console.log(`나이는 ${age}입니다.`)
    console.log(`국적은 ${nationality}입니다.`)
}

introduce('updaun', '미국', 4);
console.log("");
introduce('updaun', 4);

let g = 4; // 글로벌 변수, 전역 변수 (Global Variable)

// Scope: 범위, 영역
function myFunction(){ // 블록문( Block Statement )
    let l = 3;         // 로컬 변수, 지역 변수( Local Variable ) 
    console.log(g);
    console.log(l);
}

myFunction();
console.log(g);
// console.log(l); // 선언되지 않았다는 에러 발생

// 상수 (Constant)
const MY_NUMBER = 1234;
const PI = 3.14;
let radius = 0; //반지름 

// PI = 3.141592; // const 변수 , 상수는 재할당 불가

// 원의 넓이를 계산하는 함수
function calculateArea(){
    return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());