var plus = function(a, b, c) {
    return a + b + c;
};
// patial
// 여러 개의 인자를 받는 함수가 있을 때 일부의 인자를 고정한 함수를 만드는 기법입니다
Function.prototype.partial = function() {
    var args = [].slice.apply(arguments);
    var self = this;

    return function() {
        return self.apply(null, args.concat([].slice.apply(arguments)));
    };
};

var plusa = plus.partial(1);
console.log(plusa(2, 3));

var plusb = plusa.partial(2);
console.log(plusb(4));

var plusab = plus.partial(1, 3);
console.log(plusab(5));

console.log("=============== bind ==============");
/* bind 로 partial applicattion 만들기 */

var plusa = plus.bind(null, 1);
console.log(plusa(2, 3));

var plusb = plusa.bind(null, 2);
console.log(plusb(4));

var plusab = plus.bind(null, 1, 3);
console.log(plusab(5));