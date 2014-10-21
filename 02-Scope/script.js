var globalVar = "This is a global variable.";

var globalFunction = function(paramOne) {
	var localVar = "This is a local variable.";
	
	var localFunction = function() {
		var superLocalVar = "Hello, World!";
		var localVar = "override var";
		alert(superLocalVar);		
		alert(paramOne);
		alert(globalVar);
		alert(localVar);		
		alert(foo);		
	};
	
	localFunction();
	alert(localVar);
};

globalFunction(2);