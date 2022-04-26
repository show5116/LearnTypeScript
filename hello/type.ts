//typescript는 변수 선언 시, type을 설정해준다.
let variable1: string;
variable1 = "변수 선언 후 값 지정";
let variable2: string = "선언과 동시에 값 지정";

// boolean 타입, false, true값을 가짐
let isBoolean: boolean = true;

// Number 타입, 소수까지 다 나타낼 수 있다.
let num : number;
let int : number = 1;
let float : number = .1;
let binary : number = 0b11;
let notN : number = NaN;

// string 타입
let myName : string = "유영진";
let introduce : string = `제 이름은 ${myName} 입니다.`;

// Array 타입, 다중타입도 설정할 수 있다.
let fruits : string[] = ["apple","strawberry","raspberry"];
let count : number[] = [1,2,3,4,5,6,7,8,9,10];
let many : (string | number)[] = ["hey",1,3,"you"];
let anyArray : any[] = [true,1,["array"],{ json: "json"}];

// 읽기 전용 Array
let readArray1 : readonly number[] = [1,2,3];
let readArray2 : ReadonlyArray<number> = [1,2,3];

// interface 타입
interface Person {
    name : string;
    age : number;
    isMarriage : boolean;
}

let person1 : Person = {
    name : "사람1",
    age : 21,
    isMarriage : false
}

// tuple 타입, 고정된 길이를 가지는 배열이다.
let tuple : [string,string,number] = ["a","b",3];

// enum 타입
enum Week {
    Sunday = 7,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
console.log(Week.Monday);

enum Capital {
    Korea = "Seoul",
    US = "Washington D.C."
}

// any 타입 , 모든 타입을 의미한다. 일반적인 js와 같이 어떤 타입의 값을 할당해도 상관없다.
// 컴파일 옵션 "noImplicitAny" : true 를 사용하면 any 사용시 에러를 일으킬 수 있다.
let any : any = 123;
any = "any";
any = true;

// Unknown 타입 , any 처럼 어떤 값도 할당할 수 있지만, 다른 타입에 할당할 수 없고, 타입을 단언해주거나 any 타입에만 할당 가능하다.
let un : unknown = 1;
let un1 : number = un as number;
let un2 : any = un;

// Object 타입 , js에서 typeof 연산자의 return 값이 'object'인 타입을 나타낸다.
let obj1 : object = {};
let obj2 : object = [];
let func : object = function () {};
let date : object = new Date();
let objPerson : { name : string, age : number} = {
    name : "jin su",
    age : 25
}
