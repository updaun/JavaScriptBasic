// 연산순위
console.log(2+3*2);   // 8 
console.log((2+3)*2); // 10

// 거듭제곱
console.log(2**3);

// 나머지
console.log(7%3);


// 문자열
console.log("문자열");
console.log("I'm Iron man");
console.log("He said \"I'm Iron man\"");

// backtick (`)
console.log(`He said "I'm Iron man"`);

// 문자열 병합
console.log("3"+"Hello!!");
console.log("3"+"5");

// 불린 (Boolean)
console.log(2>1);
console.log(2<1);
console.log(3>=2);
console.log(3<=3);
console.log(3===3);
console.log(3!==3);

console.log('javascript'==='javascript');

console.log(true&&true);


// typeof 연산자
console.log(typeof 101);
console.log(typeof 'hello');
console.log(typeof true);

let name = 'updaun'
function sayHello() {
    console.log('Hello');
};

console.log(typeof name);
console.log(typeof sayHello);

console.log(typeof 'Hello'+'updaun');
console.log(typeof 8-3);

console.log(typeof ('Hello'+'updaun'));
console.log(typeof (8-3));


// 형변환(type conversion)

// String, Number, Boolean
console.log(Number('10')+Number('5'));
console.log(String(10)+String(5));

// 숫자 -> 문자
let x = 123;
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));

console.log('');

// 불린 -> 문자
let y = true;
console.log(y);
console.log(String(y));
console.log(typeof y);
console.log(typeof String(y));

// 문자 -> 숫자
// let x = '문자'; //NaN
let x = '123';
console.log(x);
console.log(Number(x));
console.log(typeof x);
console.log(typeof Number(x));

console.log('');

// 불린 -> 숫자
let y = true;
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));


// 문자 -> 불린
let x = '문자';
// let x = ''; // false 로 변환
console.log(x);
console.log(Boolean(x));
console.log(typeof x);
console.log(typeof Boolean(x));

console.log('');

// 숫자 -> 불린
let y = 123;
// let y = 0; // false 로 변
// let y = NaN; // false 로 변환

console.log(y);
console.log(Boolean(y));
console.log(typeof y);
console.log(typeof Boolean(y));

// '', 0, NaN <- falsy

// 자동 형변환
console.log('4' - true);  // 3


// 산술 연산
console.log(4 + '2');        // 42  문자열 연산 > 숫자 연산
console.log(4 + 2);          // 6   
console.log(4 - true);       // 3
console.log(4 * false);      // 0
console.log(4 / '2');        // 2
console.log('4' ** true);    // 4
console.log('4' % 'two');    // NaN

// 관계 비교 연산
console.log( 2 < '3');       // true
console.log( 2 > true);      // true
console.log( '2' <= false);  // false
console.log('two' >= 1);     // false 비교가 안되는 것도 false

// 같음 비교 연산
console.log(1 === '1');      // false
console.log(1 === true);     // false
console.log(1 == '1');       // true
console.log(1 == true);      // true

// template 문자열
let year = 2021;
let month = 12;
let day = 15;

console.log('오늘 날짜는 '+ year + '년 '+ month + '월 ' + day + '일 입니다.' );
console.log(`오늘 날짜는 ${year}년 ${month}월 ${day}일 입니다.`);

let myNumber = 3;
function getTwice(x) {
    return x * 2;
}
console.log(`${myNumber}의 두 배는 ${getTwice(myNumber)}입니다.`);

// null 과 undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false

let updaun;
console.log(updaun);  // undefined
updaun = null;
console.log(updaun);  // null
updaun = undefined;
console.log(updaun);  // undefined

let cup;
console.log(cup);  // undefined
cup = '물';
console.log(cup);  // 물
cup = null;
console.log(cup);  // null