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