// object 객체
// javascript의 모든 것이 객체다!

/*
{
    key : value,
    key : value
}
*/

// typeof(object) => object

let updaun = {
    name:"daun",
    'born year':"2021",
    isVeryNice:true,
    worstCourse:null,
    bestCourse:{
        title:'자바스크립트 프로그래밍 기초',
        language:'Javascript'
    }
};

// 점 표기법(objectName.propertyName)
// key에 띄어쓰기 있는 문자열이 있으면 표현 제한
// console.log(updaun.born year);
console.log(updaun.name);

// 대괄호 표기법(objectName['propertyName'])
// 프로퍼티 네임을 자유롭게 입력할 수 있음
console.log(updaun['born year']);
console.log(updaun.bestCourse.title);
console.log(updaun.bestCourse['language']);

// 존재하지 않는 프로퍼티에 접근 -> undefined
console.log(updaun.bestCourse['teacher']);

// 자바스크립트 면접 질문
// var와 let의 차이는?
// 호이스팅은 무엇인가?

// 프로퍼티 수정
console.log(updaun.name);
updaun.name = "updaun";
console.log(updaun.name);

// 프로퍼티 추가
console.log(updaun.ceo);
updaun.ceo = "ceo";
console.log(updaun.ceo);

// 프로퍼티 삭제
console.log(updaun.worstCourse);
delete updaun.worstCourse;
console.log(updaun.worstCourse);

// 객체 안에 프로퍼티 존재 여부 확인

// 'propertyName' in object
console.log('name' in updaun);  // true


// 메소드 (Method)

let greeting = {
    sayHello: function(name){
        console.log(`Hello! ${name}!!`);
    },
    sayHi: function(){
        console.log('Hi!');
    },
    sayBye: function(){
        console.log('Bye!');
    },
}

greeting.sayHi();
greeting.sayHello('daun');
greeting['sayHello']('hee');


// for in 반복문

/*
for(변수 in 객체) {

}
*/
// PropertyName 출력
for (let key in updaun){
    console.log(key);         // key
    console.log(updaun[key]); // value
}

// 내장 객체 Date
let myDate = new Date();
console.log(myDate);

// 1970년 1월 1일 00:00:00 UTC + 1000 milliseconds(1 sec)
let milliDate = new Date(1000);
console.log(milliDate);


// new Date('YYYY-MM-DD')
let strDate = new Date('2017-05-18');
console.log(strDate);

// new Date('YYYY-MM-DDThh:mm:ss')
let timeDate = new Date('2017-05-18T19:11:16');
console.log(timeDate);

// new Date(YYYY, MM, DD, hh, mm, ss, ms); 
// 년도와 월은 필수, 나머지 생략 가능 default value => day = 1 나머지는 0
// month는 0부터 시작!
let valDate = new Date(2017, 4); // month에 4를 넣어도 5월로 입력
console.log(valDate); // 2017-04-30T15:00:00.000Z ??


// Date.getTime()
// 1970sus 1월 1일 00:00:00 UTC 부터 몇 밀리초 지났는지? => 타임스탬프(time stamp)
console.log(valDate.getTime());

let ddayDate = new Date(2017, 4, 18, 19, 11, 16);
let today = new Date();

let timeDiff = ddayDate.getTime() - today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff/1000 + '초');
console.log(timeDiff/1000/60 + '분');
console.log(timeDiff/1000/60/60 + '시간');


console.log(ddayDate.getFullYear());        // 2017
console.log(ddayDate.getMonth());           // 4
console.log(ddayDate.getDate());            // 18
console.log(ddayDate.getDay());             // 4 -> 목요일
console.log(ddayDate.getHours());           // 19
console.log(ddayDate.getMinutes());         // 11
console.log(ddayDate.getSeconds());         // 16
console.log(ddayDate.getMilliseconds());    // 0


console.log(today.getDay());  

// Date 객체 수정하기
ddayDate.setFullYear(2002);
ddayDate.setMonth(6);
ddayDate.setDate(20);

console.log(ddayDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(ddayDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(ddayDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)


let noDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없습니다

// 2월 1일로 자동고침 되는걸 확인할 수 있습니다.
console.log(noDate) // Mon Feb 01 1988 00:00:00

// Date.now()
let nowDate = new Date();

console.log(Date.now() === nowDate.getTime()); // true

// type change
let typeDate = new Date(2017, 4, 18);

console.log(typeof typeDate); // object
console.log(String(typeDate)); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
console.log(Number(typeDate)); // 1495033200000
console.log(Boolean(typeDate)); // true

console.log(typeDate.getTime() === Number(typeDate)); // true


let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff2 = myDate2 - myDate1;
console.log(timeDiff2); // 86400000 (ms)
console.log(timeDiff2 / 1000); // 86400 (sec)
console.log(timeDiff2 / 1000 / 60) // 1440 (min)
console.log(timeDiff2 / 1000 / 60 / 60) // 24 (hour)
console.log(timeDiff2 / 1000 / 60 / 60 / 24) // 1 (date)


let date1 = new Date('12/15/1999 05:25:30');
let date2 = new Date('December 15, 1999 05:25:30');
let date3 = new Date('Dec 15 1999 05:25:30');