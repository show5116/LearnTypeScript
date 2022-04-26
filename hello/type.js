//typescript는 변수 선언 시, type을 설정해준다.
var variable1;
variable1 = "변수 선언 후 값 지정";
var variable2 = "선언과 동시에 값 지정";
// boolean 타입, false, true값을 가짐
var isBoolean = true;
// Number 타입, 소수까지 다 나타낼 수 있다.
var num;
var int = 1;
var float = .1;
var binary = 3;
var notN = NaN;
// string 타입
var myName = "유영진";
var introduce = "\uC81C \uC774\uB984\uC740 ".concat(myName, " \uC785\uB2C8\uB2E4.");
// Array 타입, 다중타입도 설정할 수 있다.
var fruits = ["apple", "strawberry", "raspberry"];
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var many = ["hey", 1, 3, "you"];
var anyArray = [true, 1, ["array"], { json: "json" }];
// 읽기 전용 Array
var readArray1 = [1, 2, 3];
var readArray2 = [1, 2, 3];
var person1 = {
    name: "사람1",
    age: 21,
    isMarriage: false
};
// tuple 타입, 고정된 길이를 가지는 배열이다.
var tuple = ["a", "b", 3];
// enum 타입
var Week;
(function (Week) {
    Week[Week["Sunday"] = 7] = "Sunday";
    Week[Week["Monday"] = 1] = "Monday";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wednesday"] = 3] = "Wednesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
})(Week || (Week = {}));
console.log(Week.Monday);
var Capital;
(function (Capital) {
    Capital["Korea"] = "Seoul";
    Capital["US"] = "Washington D.C.";
})(Capital || (Capital = {}));
// any 타입 , 모든 타입을 의미한다. 일반적인 js와 같이 어떤 타입의 값을 할당해도 상관없다.
// 컴파일 옵션 "noImplicitAny" : true 를 사용하면 any 사용시 에러를 일으킬 수 있다.
var any = 123;
any = "any";
any = true;
// Unknown 타입 , any 처럼 어떤 값도 할당할 수 있지만, 다른 타입에 할당할 수 없고, 타입을 단언해주거나 any 타입에만 할당 가능하다.
var un = 1;
var un1 = un;
var un2 = un;
// Object 타입 , js에서 typeof 연산자의 return 값이 'object'인 타입을 나타낸다.
var obj1 = {};
var obj2 = [];
var func = function () { };
var date = new Date();
var objPerson = {
    name: "jin su",
    age: 25
};
