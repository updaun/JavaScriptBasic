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