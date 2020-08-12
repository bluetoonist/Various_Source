window.onload = function() {

    // "lexical"이란,
    // 어휘적 범위 지정(lexical scoping) 과정에서
    // 변수가 어디에서 사용 가능한지 알기 위해 그 변수가
    // 소스코드 내 어디에서 선언되었는지 고려한다는 것을
    // 의미한다.

    function init() {
        var name = "Mozila";

        function displayName() {
            alert(name); // 외부 변수인 name에 접근 가능

        } // end displayName()

        displayName();
    } //end init()

    init();


    function makeFunc() {
        var name = "Mozilla";

        function displayName() {
            alert(name);
        }
        return displayName;
    }

    var myFunc = makeFunc();
    myFunc();


    function makeAdder(x) {
        var y = 1;
        return function(z) {
            y = 100;
            return x + y + z; // y = 100 
        };
    }

    // 인스턴스화 느낌?
    var add5 = makeAdder(5);
    var add10 = makeAdder(10);

    console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
    console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
    //함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

}