window.onload = function () {

    // EvenetListenere 는 ElementById로 받아줘야 함 
    var obj = document.getElementById("allSelect");
    obj.addEventListener("click", allSelectChecked);

    var startBtnObj = document.getElementById("startBtn");
    startBtnObj.addEventListener("click", startBkg);

    // 전체 선택 버튼 기능
    function allSelectChecked() {
        var checkFlag = 0;

        var checked_input_tag = document.getElementsByName("users");
        try {
            if (obj.checked == true) {
                for (i = 0; checked_input_tag.length; i++) {
                    checked_input_tag[i].checked = true;
                }
            }
            if (obj.checked == false) {
                for (i = 0; checked_input_tag.length; i++) {
                    checked_input_tag[i].checked = false;
                }
            }
            
        } catch (err) {
            console.error();
        }

    }


    function checkBySequen(param1) {
        console.log(param1);
        var max = Math.max.apply(null, param1);
        for (var i in param1) {
            (function (i) {
                timeId = setTimeout(function () {

                    var changed_bkg_tag = document.getElementsByTagName("label");
                    changed_bkg_tag[i].style.background = 'red';

                }, 100 * i);
            })(i);

            (function (i) {
                timeId = setTimeout(function () {

                    var changed_bkg_tag = document.getElementsByTagName("label");
                    changed_bkg_tag[i].style.background = 'white';

                }, 200 * i);
            })(i);

        }

        return true;
    }


    function startBkg() {

        // 밑에는 시작 버튼 눌렀을 떄


        var checkListArray = [];


        // 밑에는 체크된 것들 중에 반복하는 것
        var checked_return = document.getElementsByTagName("input");


        // check 된 Input tag index 저장

        for (i = 0; i < checked_return.length; i++) {
            if (checked_return[i].checked == true) {
                checkListArray[i] = i;
            }
        }

        value = checkBySequen(checkListArray);

        if (value == true) {
            return;

        }
        if (obj.checked == true) {
            var changed_bkg_tag = document.getElementsByTagName("label").length;
            // 빨간색으로 배경색 바꾸는 로직
            var StartCnt = 1;
            var whiteCnt = 0;

            for (i = 0; i < changed_bkg_tag; i++) { //startfor
                //  밑의 중첩 함수는 클로져를 이용한 for문 반복 기법

                (function (x) {
                    timeId = setTimeout(function () {
                        if (StartCnt == 6) {
                            StartCnt = 1;
                            return;
                        }

                        var changed_bkg_tag = document.getElementsByTagName("label");
                        changed_bkg_tag[StartCnt++].style.background = 'red';

                    }, 1 * x);
                })(i);

                // 하얀색으로 배경색 바꾸는 로직
                (function (x) {
                    timeId = setTimeout(function () {
                        if (whiteCnt == 6) {
                            whiteCnt = 0;
                            return;
                        }

                        var changed_bkg_tag = document.getElementsByTagName("label");
                        changed_bkg_tag[whiteCnt++].style.background = 'white';

                    }, 1 * x);
                })(i);
            } //endfor


        }


    }


}