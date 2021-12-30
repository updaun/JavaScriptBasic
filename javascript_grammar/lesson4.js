// if문 (if statement)

/*
if (조건부분) {
    동작부분
}
*/

let temperature = 1;

if (temperature <= 0) {
    console.log("물이 업니다.");
} else {
    if (temperature < 100) {
        console.log("물이 얼지도 끓지도 않습니다.");
    } else{
        if (temperature < 150) {
            console.log("물이 끓습니다.")
        } else {
            console.log("물이 모두 수증기가 되었습니다.");
        }
    }
}


if (temperature <= 0) {
    console.log("물이 업니다.");
} else if (temperature < 100) {
    console.log("물이 얼지도 끓지도 않습니다.");
} else if (temperature < 150) {
    console.log("물이 끓습니다.");
} else {
    console.log("물이 모두 수증기가 되었습니다.");
}

// switch문 (switch statement)

/*
switch (비교할 값) {
    case 조건값_1:
        동작부분;
        break;
    case 조건값_2:
        동작부분;
        break;
    default:
        동작부분;
}
*/

let myChoice = 2;

switch(myChoice) {
    case 1:
        console.log("토끼를 선택한 당신, ...");
        break;
    case 2:
        console.log("고양이를 선택한 당신, ...");
        break;
    case 3:
        console.log("코알라를 선택한 당신, ...");
        break;
    case 4:
        console.log("강아지를 선택한 당신, ...");
        break;
    default:
        console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

// 반복문 (loop statement)

/*
for (초기화부분; 조건부분; 추가동작부분;) {
    동작부분
}
*/

for (let i = 1; i <= 10; i++) {
    console.log(`${i} today i learn`);
}


// while문 (while statement)
let i = 1;

while (i <= 10) {
    console.log(`${i} while 반복`);
    i++;
}

for (let i = 1; i<=10; i++){
    console.log(`${i} for 반복`);
}

// 언제 while문을 사용할까?
// 보통 반복문 안에서 사용된 변수를 그 후에도 사용해야하는 경우 많이 사용하게 된다!
// for문은 for문 안에 선언된 변수를 사용하고 그 이후에 사용하지 않는다.
let j = 30;

while ( j % 7 != 0){
    j++;
}
console.log(`${j}`);


// break와 continue
let z = 1;
while (z <= 10){
    console.log(z);
    if(z==7){
        break;
    }
    z++;
}

for (let i = 1; i<=10; i++ ){
    console.log(i);
    if (i === 7){
        break;
    }
}

for (let l = 1; l <= 10; l++) {
    if (l%2 === 0 ){
        continue;
    }
    console.log(l);
}

let a = 1;
while(a<=10) {
    if (a%2 !== 0){
        a++;
        continue;
    }
    console.log(a);
    a++;
}