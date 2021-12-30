// 숫자 표기법
let millionaire = 1000000000;
let myNumber = 1e9;

console.log(millionaire);               // 1000000000
console.log(myNumber);                  // 1000000000
console.log(millionaire === myNumber);  // true

console.log(25e5 === 2500000);        // true
console.log(5.3e3 === 5300);          // true
console.log(-6.1e8 === -610000000);   // true


console.log(16e-5 === 0.00016);        // true
console.log(3.5e-3 === 0.0035);        // true
console.log(-9.1e-5 === -0.000091);    // true


// 16진법 (Hexadecimal)
let hex1 = 0xff;   // 255
let hex2 = 0xFF;   // 255

// 8진법 (Octal)
let octal = 0o377; // 255

// 2진법 (binary numeral system)
let binary = 0b11111111; // 255

console.log(hex1);
console.log(hex2);
console.log(octal);
console.log(binary);

// 숫자도 객체이다!
// 숫자형 메소드

// Number
let my_number = 0.3591;

// 소수점 자리리 수 지정 (반올림)
console.log(my_number.toFixed(3));
console.log(my_number.toFixed(7));        // 0으로 채우기
console.log(typeof my_number.toFixed(7)); // string
console.log(Number(my_number.toFixed(7))); 
console.log(typeof Number(my_number.toFixed(7))); // Number
// +를 활용한 Number 함수 (숫자형 형변환) 과 동일한 효과
console.log(+my_number.toFixed(7));
console.log(typeof +my_number.toFixed(7));

let my_number2 = 255;

// toString(2 ~ 36)
console.log(my_number2.toString(2));
console.log(my_number2.toString(8));
console.log(my_number2.toString(16));
console.log(typeof my_number2.toString(16));

// 절댓값 (Absolute Number)
console.log(Math.abs(-10));
console.log(Math.abs(10));


// 최댓값 (Maximum)
console.log(Math.max(2, -1, 4, 5, 0));

// 최솟값 (Minimum)
console.log(Math.min(2, -1, 4, 5, 0));

// 거듭제곱 (Exponentiation)
console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

// 제곱근 (Square Root)
console.log(Math.sqrt(25));
console.log(Math.sqrt(49));

// 반올림 (Round)
console.log(Math.round(2.3));
console.log(Math.round(2.4));
console.log(Math.round(2.49));
console.log(Math.round(2.5));
console.log(Math.round(2.6));

// 버림과 올림 (Floor and Ceil)
console.log(Math.floor(2.4));
console.log(Math.floor(2.49));
console.log(Math.floor(2.8));
console.log('-');
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.49));
console.log(Math.ceil(2.8));

// 난수 (Random)
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// 더 많은 Math 메소드
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math