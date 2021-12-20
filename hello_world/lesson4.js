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
