//export모듈에 직접 add, multiply프로퍼티 추가해보기

exports.add = function(a, b) {
    return a + b;
}

exports.multiply = function(a, b) {
    return a * b;
}

//새로운 객체에 프로퍼티 추가 후 module.exports에 객체를 추가하기
var calc = {};

calc.min = function(a, b) {
    return a - b;
}

module.exports = calc;
