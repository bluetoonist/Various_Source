var cbExample = function(number, cb) {
    setTimeout(function() {
        var sum = 0;
        for (var i = number; i > 0; i--) {
            sum += i;
            console.log(sum, i);
        }
        cb(sum);
    }, 0);
};

cbExample(10, function(result) {
    console.log(result);
}); // 55


console.log('first');