/* ================= 렉시컬 스코핑 ==================== */
// 전역 변수
var name = 'zero'

function wow(word) {
    // 무엇이 찍힐까?
    console.log(word + ' ' + name) // hello zero
}

function say() {
    // 지역 변수
    var name = 'nero';
    console.log(name); //nero
    wow(name); // 지역변수로 선언된 nero 넘겨줌
}

say();

/* ================= ==================== */

var counter = function() {
    var count = 0;

    function changeCounter(number) {
        count += number;
    }
    return {
        increase: function() {
            changeCounter(1);
        },
        decrease: function() {
            changeCounter(-1);
        },
        show: function() {
            console.log(count);
        }

    }

};

var counterClousre = counter();
counterClousre.increase();
counterClousre.decrease();
counterClousre.show();