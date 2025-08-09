// 5장. 표현식과 문

var score = 100; // 100은 리터럴이다. 리터럴은 그 자체로 표현식이다.

var score2 = 50+50; // 50+50은 리터럴과 연산자로 이뤄져있다. 평가되어 숫자 100을 생성하므로 표현식이다.
score2; // 100 -> 변수 식별자를 참조하면 변수 값으로 평가된다. 값을 생성하지는 않지만 값으로 평가되므로 표현식이다.

// 리터럴 표현식
10
'Hello'

// 식별자 표현식 (선언이 이미 존재한다고 가정)
sum
person.name
arr[1]

// 연산자 표현식
10 + 20
sum = 10
sum !== 10

// 함수/메서드 호출 표현식 (선언이 이미 존재한다고 가정)
square()
person.getName()

function foo() {
    return
    {}
    // ASI 동작 결과 => return; {};
    // 개발자 예측   => return {};
}

console.log(foo()); // undefined

var bar = function() {}
(function() {})();
// ASI 동작 결과 => var bar = function () {}(function() {})();
// 개발자의 예측  => var bar = function () {}; (function() {})();
// TypeError: (intermediate value)(...) is not a function