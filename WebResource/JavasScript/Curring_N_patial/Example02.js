// currying도 partial application처럼 인자를 미리 고정할 수 있지만 하나씩만 고정한다는 것이 특징입니다.
function multiplyThree(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    };
}
console.log(multiplyThree(4)(8)(2));

// =======================================================
Function.prototype.curry = function(one) {
    var origFunc = this;
    var target = origFunc.length;
    var args = [];

    function next(nextOne) {
        args = args.concat(nextOne);
        if (args.length === target) {
            return origFunc.apply(null, args);
        } else {
            return function(nextOne) { return next(nextOne) };
        }
    }
    return next(one);
}

function multiplyFour(w, x, y, z) {
    return w * x * y * z;
}
console.log(multiplyFour.curry(2)(3)(4)(5)); // 120