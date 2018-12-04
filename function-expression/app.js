function callFunction(fun) {
    fun();
}


// function expression
var sayBye = function() {
    console.log('bye');
};

callFunction(sayBye);