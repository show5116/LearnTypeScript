// 함수는 매개변수와 반환값의 타입을 지정하면서 함수를 지정한다.
function add(numA, numB) {
    return numA + numB;
}
// void 타입은 값을 반환하지 않는 타입이다.
function printScreen(any) {
    console.log(any);
}
var sum = add(1, 2);
printScreen(sum);
// never 타입은 오류를 출력하거나, 리턴 값을 내보내지 않는다.
function invalid(message) {
    throw new Error(message);
}
