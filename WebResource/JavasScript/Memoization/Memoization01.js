var factorial = (function() {
    var save = {};
    var fact = function(number) {
        if (number > 0) {
            var saved = save[number - 1] || fact(number - 1);
            var result = number * saved;
            save[number] = result;
            console.log(saved, result);
            return result;

        } // end if 
        else {
            return 1;

        } // end else

    }; // end fact
    return fact;

})();

factorial(7);
factorial(7);