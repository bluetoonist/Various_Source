//document.ready -> window.ready -> window.onload
//window.onload = function () {}; (페이지 로드가 끝난 다음에 실행)  
//$(window).ready(function () {}); (페이지 내의 이미지나 리소스 로드 후 실행)
//$(document).ready(function(){}); (페이지 DOM이 그려지면(태그등이 그려지고) 실행)

$(document).ready(function() {

    function startDate() { //실시간 시간출력
        var dateString;
        var newDate = new Date();

        //String.slice(-2) : 문자열을 뒤에서 2자리만 출력한다. (문자열 자르기)
        var days = ['일', '월', '화', '수', '목', '금', '토'];
        var day = newDate.getDay();
        var inputday = days[day];
        var hours = newDate.getHours();
        var minutes = newDate.getMinutes();
        if (hours > 12) {
            hours = "pm " + (hours - 12);
            if (hours < 10) {
                hours = "pm " + "0" + hours;
            }
        } else {
            hours = "am " + hours;
            if (hours < 10) {
                hours = "am " + "0" + hours;
            }
        }
        dateString = inputday + " " + hours + ":" + minutes;
        //document.write(dateString); 문서에 바로 그릴 수 있다.
        return dateString;
    };
    //.data("key값","value")
    var myWrite = function() {
        console.log("Hello?");

        var $clonedRight = $(".speakRight:eq(0)").clone(); //speakLeft를 Class값으로 가지는 요소를 복제
        var $clonedLeft = $(".speakLeft:eq(0)").clone();

        $clonedRight.find(".talk").text($("#inputMeText").val()); //talk
        $(".chatBox:eq(0)").append($clonedRight);
        $clonedLeft.find(".talk").text($("#inputMeText").val());
        $(".chatBox:eq(1)").append($clonedLeft);

        if (($("#inputMeText").val()) != "") {
            $clonedLeft.find(".talk").text($("#inputMeText").val()); //talk
            $(".chatBox:eq(1)").append($clonedLeft);
            $clonedRight.find(".talk").text($("#inputMeText").val());
            $(".chatBox:eq(0)").append($clonedRight);
        }
    };

    var yourWrite = function() {
        var $clonedRight = $(".speakRight:eq(0)").clone();
        var $clonedLeft = $(".speakLeft:eq(0)").clone();

        $clonedRight.find(".talk").text($("#inputYouText").val()); //talk
        $(".chatBox:eq(0)").append($clonedRight);

        $clonedLeft.find(".talk").text($("#inputYouText").val()); //talk
        $(".chatBox:eq(1)").append($clonedLeft);

        if (($("#inputYouText").val()) != "") {
            $clonedLeft.find(".talk").text($("#inputYouText").val()); //talk
            $(".chatBox:eq(0)").append($clonedLeft);
            $clonedRight.find(".talk").text($("#inputYouText").val()); //talk
            $(".chatBox:eq(1)").append($clonedRight);
        }
    };

    var lineDelete = function() {

        /*var $clonedLeft = $(".speakLeft:eq(0)").clone();
        
        $(".chatBox:eq(0)").remove($clonedLeft);
        $(".chatBox:eq(1)").remove($clonedRight);*/
    }

    // 나 입력버튼
    $("#btnInputMe").click(function() { // 나 입력버튼
        myWrite();
    });

    // 상대방 입력버튼
    $("#btnInputYou").click(function() { // 나 입력버튼
        yourWrite();
    });

    /*$(".globalBox").delegate(".speakItem","click",function(){
    alert("click")
    });*/
    //2번째 파라미터에 걸림 글로벌이 아니라 스피크에 걸림 스피크 안쓰면 글로벌에 클릭이벤트 걸림
    $(".globalBox").on("click", ".speakItem", function() {
        alert("click")
    });


    $('chatBox:eq(0) >  speakRight:et').click({

        mouseenter: function() {
            // 마우스를 올렸을 떄 x 버튼 나타남
            console.log("Hello?");

            $('.hide').css("display", "block");

            // 'X' 버튼 누르면 액션이 취해짐
            $('.btnRemove').click(function() {
                console.log("test action");
            });

            console.log('mouse');
        },
        // 마우스를 내렸을 떄 x 버튼 나타남 
        mouseleave: function() {
            $('.hide').css("display", "none");
        }
    });


    // 마우스 커서 들어왔을때
    // $(".speakLeft").on("mouseover", function() {

    // $('').click



    // $('.btnRemove').css("display", "inline");

    // var tag = "<input type='button' id='deleteBtn' value='삭제'/>";
    // tag += "<input type='button' id='updateBtn' value='수정'/>";

    // $(this).css("width", "1200px");
    // $(this).append(tag);

    // $("#deleteBtn").click(function() {
    //     console.log("Delete Button Clicked?");
    //     $('.talk').remove();
    // });

    // $("#deleteBtn").click(function() {
    //     console.log("Delete Button Clicked?");
    //     $('.talk:eq(1').remove();
    // });

    // $(this).find('.talk').append(tag);

    // }, function() {
    //     $(this).css("color", "blue");
    //     $('.btnRemove').css("display", "none");
    //     $('#deleteBtn').remove();
    //     $('#updateBtn').remove();
    //     $('.talk').append();
    // });

    //마우스 떠났을떄
    $(".talk").on('mouseleave', function() {});
})