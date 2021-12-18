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
    return x*x;    
}

console.log("함수 호출 전");
console.log(square(5));
console.log("함수 호출 후");