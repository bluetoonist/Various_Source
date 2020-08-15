/**
 * 
 */
// $.getScript("../japangi/js/japangi.js", function() {
//     database();
// });

function automacine(prod) {
    this.maxProd = 8; // 자판기에 전시되는 상품갯수
    this.minPrice = 100; // 최소 가격
    this.maxPrice = 1500; // 최대 가격
    this.myPoket = 10000; // 내지갑
    this.inCoin = prod; // 투입된 동전



    // this.prodInfo = makeProd(this.maxProd, prodKind, this.minPrice, this.maxPrice); // 음료수 객체 생성
}
var current_obj = new automacine();


$(document).ready(function() {

    // 금액 입력 후 EnterKey를 누르면 처리하는 이벤트
    $('#inpMoney').keyup(function(event) {

        if (event.keyCode == 13) {

            let insertCoin = $(this).val();

            if (insertCoin > 1500) {
                alert("최대 가격보다 큽니다");
                console.log(insertCoin);
                return;
            } else if (insertCoin < 100) {
                alert("최대 가격보다 작습니다");
                return;
            }
            coinList = ['100', '500', '1000', '5000', '10000'];


            let insertChcker = coinList.indexOf(insertCoin);


            if (insertChcker != -1) {

                if (current_obj.myPoket <= 0) {
                    alert("남은 금액이 없습니다");
                    return;
                }
                current_obj.inCoin = insertCoin;
                current_obj.myPoket = current_obj.myPoket - insertCoin
                console.log("남은 금액 :", current_obj.myPoket);


            } else {
                alert("100원 500원 1000원 5000원 10000원 중에서 입력하세요");

            }
        } // end of Enter Eey
    }); // end of Enter Eey

    $('button').click(function() {
        // console.log($(this).parents().eq());
        var obj = $(this).parents().eq().prevObject[0].outerText;
        JuiceValue = obj.slice(0, 5);
        console.log(JuiceValue);
        console.log(current_obj.inCoin);
        let resultValue = JuiceValue - current_obj.inCoin;

        console.log(resultValue);


    });
});