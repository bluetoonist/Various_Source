window.onload = function() {

    // hoisting!

    // 함수를 먼저 호출
    catName("Chloe");

    // 함수가 호출된 뒤에 함수 정의
    function catName(name) {
        console.log("My cat's name is " + name);
    }

    /* num이 선언되지 않더라도 에러를 내지 않습니다 */
    num = 6;
    num + 7;
    var num;

    // JavaScript는 초기화가 아닌 선언만 끌어올립니다(hoist).

    var x = 1; // x 초기화
    console.log(x + " " + y); // '1 undefined'
    var y = 2;


    // 아래 코드는 이전 코드와 같은 방식으로 동작합니다.
    var x = 1; // Initialize x
    var y; // Declare y
    console.log(x + " " + y); // '1 undefined', y를 선언하고 y는 밑에서 변수 할당
    y = 2; // Initialize y

    // hoisting 
    // 끌어올리다라는 개념으로 이해하면 편함 즉.
    //  변수 선언만 해놓고 특정 로직을 세운 뒤, 로직의 뒤에서 값을 할당해도 무관 

}