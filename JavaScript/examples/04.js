// 4장. 변수

var result = 10+20; // 변수에 하나 값 저장
var user = { id:1, name:'Lee' } // 변수에 여러값 저장 (객체)
var users = [ // 변수에 여러값 저장 (배열)
    { id:1, name:'Lee' },
    { id:2, name:'Jang' }
];

const foo = 10;
foo = 100; //불가

console.log(score); // undefined
var score = 80;     // 변수 선언, 값 할당
console.log(score); // 80

// 카멜 케이스 (camelCase)
var firstName;
// 스네이크 케이스 (snake_case)
var first_name;
// 파스칼 케이스 (PascalCase)
var FirstName;
// 헝가리언 케이스 (typeHungarianCase)
var strFirstName; //type+identifier
var $elem = document.getElementById('myId'); //DOM 노드
var observable$ = fromEvent(document, 'click'); //RxJS 옵저버블