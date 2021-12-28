// 배열 (Array)
let todolistRanking = [
    'aws certification',
    'coworking',
    'javascript migration'
];

// indexing (0~)
console.log(todolistRanking[0]);

// 배열의 데이터 타입
console.log(typeof todolistRanking); // object

// 배열의 길이
console.log(todolistRanking.length);
console.log(todolistRanking['length']);

// 마지막 원소 출력
console.log(todolistRanking[todolistRanking.length-1]);

// 배열 요소 추가
todolistRanking[4] = "get new plan for next year";

// 배열의 길이보다 큰 값을 사용하여 요소를 추가하면? 빈칸 <1 empty item> 생성
console.log(todolistRanking);

// 객체 요소 삭제 방법을 활용한 배열 요소 삭제
delete todolistRanking[0]; // 빈 공간 유지
console.log(todolistRanking);


// 배열 메소드
// 배열 요소 삭제
// array.splice(startIndex, deleteCount, item)
console.log("------ splice ------");
todolistRanking.splice(1, 1, "Nice", "Good!!");
console.log(todolistRanking);

let member = ['jdu', 'kmj', 'lkj', 'jsy'];
console.log(member);




// 배열 첫 요소 삭제
member.splice(0, 1);
// 배열 마지막 요소 삭제
member.splice(member.length-1, 1);
// 배열의 첫 요소로 값 추가
member.splice(0,0, "hipipe");
// 배열의 마지막 요소로 값 추가
member.splice(member.length, 0, "kok");
console.log(member);


let members = ['jdu', 'kmj', 'lkj', 'jsy'];
console.log(members);

// 배열 첫 요소 삭제 : shift()
members.shift();
// 배열 마지막 요소 삭제 : pop()
members.pop();
// 배열의 첫 요소로 값 추가 : unshift()
members.unshift('hipipe');
// 배열의 마지막 요소로 값 추가 : push()
members.push('kok');
console.log(members);


// 배열에서 특정 값 찾기 (indexOf / lastIndexOf)
let brands = ['Google', 'Kakao', 'Naver', 'Kakao'];
console.log(brands.indexOf('Kakao'));
console.log(brands.indexOf('Daum'));

// 반대로 탐색을 뒤에서 부터
console.log(brands.lastIndexOf('Kakao'));
console.log(brands.lastIndexOf('Daum'));

// 배열에서 특정 값이 있는지 확인하기 (includes)
console.log(brands.includes('Kakao'));
console.log(brands.includes('Daum'));

// 배열 뒤집기 (reverse)
console.log(brands);
brands.reverse();
console.log(brands);