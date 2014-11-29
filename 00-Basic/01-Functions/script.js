// basic functions file
var doCalulation = function(paramOne, paramTwo, fn) {
	paramOne = paramOne + 3;
	paramOne = paramOne + 1;
	paramOne = paramOne * 8;
	
	return fn(paramOne, paramTwo);
};

function sum(paramOne, paramTwo) {
	return paramOne + paramTwo;
}



// set one 
var foo = doCalulation(2, 2, sum); // 96

// set two
var bar = doCalulation(3, 2, function (paramOne, paramTwo) {
	return paramOne * paramTwo;
}); // 112

alert(foo);
alert(bar);