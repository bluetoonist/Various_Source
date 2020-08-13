/**
 * 
 */

function database(){
	// DB가 존재하지 않으면 DB생성
	var db = openDatabase("Products","1.0","Products List",2*1024*1024);
	// TABLE생성
	db.transaction(function(tx) {// SQL을 실행하고 Control
        var query = "CREATE TABLE IF NOT EXISTS PRODUCTS(" +
            "PRODNO INTEGER NOT NULL PRIMARY KEY," +
            "PRODNAME VARCHAR2(20)  NOT NULL," +
            "PRODPRICE VARCHAR2(20) NOT NULL," +
			"INVENTORY VARCHAR2(20) NOT NULL)";

        tx.executeSql(query, [], function() {
            alert("success!!");// 성공
        }, function(e) {// e=error
            console.log(e);// 실패
            alert("error!!");
        });
    });
}
