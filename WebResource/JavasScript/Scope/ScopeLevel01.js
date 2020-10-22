window.onload = function() {

    // 함수 레벨 스코프
    // 함수 내부 전체에서 유효한 식별자가 된다.

    function foo() {
        if (true) {
            var color = "blue";
        }
        console.log(color);

    }
    foo();

    // 블록 레벨 스코프
    // let,const 키워드는 블록 레벨 스코프 변수를 만들어 줌 

    function foo2() {
        if (true) {
            let color = "blue";
            console.log(color);
        }
        console.log(color); // Reference Error 
    }
    foo2();

}