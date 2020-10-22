// 전역변수
var x = 'global';

function ex() {
    // 지역변수
    var x = 'local';
    x = 'chagne';
}

ex();
console.log(x);

// Scope Chain
//  꼬리를 물고 계속 범위를 넓히면서 찾는 관계를 스코프 체인이라고 부릅니다.
var name = "Zero"

function outer() {
    console.log('외부', name);

    function inner() {
        var enemy = 'nero';
        console.log(enemy);
    }
    inner();
}

outer();
// console.log(enemy); // undefined; (error);


/* 렉시컬 스코핑 */
// 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳(상위 범위에서)에 있는 변수를 계속 참조하게 됩니다. 
// 예시에서는 log 함수 안의 name 변수는 선언 시 가장 가까운 전역변수 name을 참조하게 됩니다.
var name1 = "zeror"

function log() {
    console.log(name1);
}

function wrapper() {
    var name1 = 'wrapper function';
    log();
}
wrapper();

var obj = {
    x: 'local',
    y: function() {
        console.log(this.x);
    }
}
obj.y();

var anoter = function() {
    var x = 'local';

    function y() {
        console.log("Loged!");
    }
    return { y: y() };
}

// var newScope = anoter();
console.log("===================");
var newScope = (function() {
    var x = 'local';
    return {
        y: function() {
            console.log(x);
        }
    };
})();

console.log(newScope.y);
newScope.y();