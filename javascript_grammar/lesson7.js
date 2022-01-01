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

let sum = 0.1 + 0.2;

// 숫자 계산 오류 발생
console.log(sum);                     // 0.30000000000000004

// 숫자 계산 오류 해결 방법
console.log(Number(sum.toFixed(1)));  // 0.3
console.log(Math.round(sum*10)/10);   // 0.3

// String(문자열도 객체이다!)
let myString = "  Hello Javascript ";

// 문자열 길이
console.log(myString.length);

// 요소 접근
console.log(myString[3]);
console.log(myString.charAt(3));

// 요소 탐색
console.log(myString.indexOf('a'));     // 앞에서
console.log(myString.indexOf('k'));     // 없는 문자열은 -1
console.log(myString.lastIndexOf('a')); // 뒤에서

// 대소문자 변환
console.log(myString.toUpperCase()); // 대문자
console.log(myString.toLowerCase()); // 소문자

// 양 끝 공백 제거
console.log(myString.trim()); // trim 메소드

// 부분 문자열 접근 slice(start, end)
console.log(myString.slice(3, 5));
console.log(myString.slice(6));
console.log(myString.slice());


for (let str of myString) {
    console.log(str);
  }

let myString2 = 'hello';
let myArray2 = ['h','e','l','l','o'];

console.log(typeof myString2);
console.log(typeof myArray2);

console.log(myString2 === myArray2);
console.log(myString2 == myArray2);

// 배열은 mutable
myArray2[0] = 'H';
console.log(myArray2);

// 문자열은 immutable
myString2[0] = 'H';
console.log(myString2);


// 기본형과 참조형
// 기본형(Primitive Type) : Number, String, Boolean, Null, Undefinded
// 기본형은 변수에 값을 할당한다.
// 참조형(Reference Type) : Object
// 참조형은 변수에 주소값을 할당한다.

// 기본형의 변수값 수정
let x = 3;
let y = x;
console.log(x);  // 3
console.log(y);  // 3
y = 5;
console.log(x);  // 3
console.log(y);  // 5

let ob_x = {name:'updaun'};
let ob_y = ob_x;
console.log(ob_x);  // { name: 'updaun' }
console.log(ob_y);  // { name: 'updaun' }
ob_y.birth = 2021;
console.log(ob_x);  // { name: 'updaun', birth: 2021 }
console.log(ob_y);  // { name: 'updaun', birth: 2021 }

// 배열도 참조형이다.
let arr_1 = [1,2,3];
let arr_2 = arr_1;
console.log(arr_1);
console.log(arr_2);
arr_2.push(4);
console.log(arr_1);
console.log(arr_2);


// 참조형 복사하기 (Reference Type Copy)
// 복사해서 수정하기!
// 배열
let number1 = [1,2,3];
let number2 = number1.slice();

number2.push(4);

console.log(number1);
console.log(number2);

// 객체
let study1 = {
    title : 'aws saa',
    subject : 'cloud computing'
}

let study2 = Object.assign({}, study1);

study2.title = 'Amazon Web Services';

console.log(study1);
console.log(study2);


// 메소드를 사용하지 않고 copy 구현하기
let study3 = {
    title : 'coding test',
    subject : 'algorithm'
};

let study4 = {};

for (key in study3){
    study4[key] = study3[key];
}

study4.title = '자료 구조';

console.log(study3);
console.log(study4);

// 함수로 구현해보기
function cloneObject(object) {
    let temp = {};
    for (let key in object){
        temp[key] = object[key];
    }
    return temp;
}

let study5 = {
    title : 'c++ programming',
    subject : 'embedded'
};

let study6 = cloneObject(study5);

study6.title = 'ROS programming';

console.log(study5);
console.log(study6);


// 참조형 변수 안에 또 참조형 변수가 있는 2중 구조의 객체 복사(에러 참고용)
let study7 = {
    title : 'computer vision',
    subject : 'deep learning',
    prerequisite : []
};

let study8 = cloneObject(study7);

study8.title = 'object detection';
// study8 배열에 추가 되었는데, study7에도 추가되어버린다. 참조형 변수 이므로
study8.prerequisite.push('opencv');

console.log(study7);
console.log(study8);

function deepcloneObject(object) {
    if (object === null || typeof object !== 'object'){
        return object;
    }

    let temp = {};
    if (Array.isArray(object)){
        temp = [];
    } else {
        temp = {};
    }

    for (let key of Object.keys(object)){
        temp[key] = deepcloneObject(object[key]);
    }
    return temp;
}

let study9 = {
    title : 'computer vision',
    subject : 'deep learning',
    prerequisite : []
};

let study10 = deepcloneObject(study9);

study10.title = 'object detection';
// study10에만 추가
study10.prerequisite.push('opencv');

console.log(study9);
console.log(study10);


// 변수와 상수
var myVariable = 'updaun';
console.log(myVariable);
var myVariable = 'Updaun!';
console.log(myVariable);

/* scope
{
    let x = 3;
  }
  
  function myFunction() {
    let y = 4;
  }
  
console.log(x);  // Uncaught ReferenceError: x is not defined
console.log(y);


{
    var x = 3;
  }
  
  function myFunction() {
    var y = 4;
  }
  
console.log(x);  // 3
console.log(y);  // Uncaught ReferenceError: y is not defined
*/

// 끌어올림 (Hoisting)
// console.log(myTestVariable);  // Uncaught ReferenceError: Cannot access 'myTestVariable' before initialization
// let myTestVariable;

console.log(myTestVariable2); // undefined
var myTestVariable2;


sayHi();

function sayHi() {
  console.log('hi');
}