var maths = {
    add: function(x, y){return x + y;},
    subtract: function(x, y){return x - y;},
    divide: function(x, y){return x / y;},
    multiply: function(x, y){return x * y;}
}

console.log(maths.add(5, 4));

var answers = function(x, y){
    console.log(maths.add(x, y));
    console.log(maths.subtract(x, y));
    console.log(maths.divide(x, y));
    console.log(maths.multiply(x, y));
};

answers(6, 2);

