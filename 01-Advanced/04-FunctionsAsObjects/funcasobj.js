/**
 * funcasobj.js Discription
 * @ Stephen O'Connor, 06-Feb-2015
 *
 * Dependencies: node.js to run
 *
 */

// immediately invoked anonymous function
(function() {

	var obj = {
		name: "obj object",
		doSomthing: function(x, y) {
			console.log(this.name + " " + x + " " + y );
		}
	};

	var foo = {
		name: "foo object"
	};

	var bar = {
		name: "bar object"
	};

	obj.doSomthing.call(foo, 4, 5);
	obj.doSomthing.apply(bar, [4, 5]);

	var calculate = function() {		
		var fn = Array.prototype.pop.apply(arguments);
		return fn.apply(null, arguments);
	};

	var sum = function() {
		var total = 0;

		for (var i = 0, len = arguments.length; i < len; i++) {
			total = total + arguments[i];
		}
		return total;
	};

	var diff = function() {
		var total = Array.prototype.shift.apply(arguments);

		for (var i = 0, len = arguments.length; i < len; i++) {
			total = total - arguments[i];
		}
		return total;
	};

	var sumResult = calculate(1, 2, 3, 4, 5, sum),
			diffResult = calculate(1, 2, 3, 4, 5, diff);

	console.log("sum: " + sumResult + "\n" + "diff: " + diffResult)

}());