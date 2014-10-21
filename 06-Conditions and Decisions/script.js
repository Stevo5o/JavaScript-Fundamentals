var foo = "hello",
	bar = 5;
	
/* logical AND &&
true && true = true
true && false = false
false && true = false
false && false = false */

/* logical OR || 
true || true = true
true || false = true
false || true = true
false || false = false */

/* locgical NOT !
!true = false
!false = true */

/****
0 = false, 1 = true
"" empty = false, " " = true
[] {} arrays and objects = true
var foo; // undefined = false
null = false 
****/

if (bar === "5") {
	alert("true");
} else {
	alert("false"); // false
}

if (foo ==="Hello") {
	alert("Hello");	
} else if (foo ==="hello") {
	alert("hello");	
} else if (foo ==="hellO") {
	alert("hellO");	
} else {
	alert("No match was found")
}

if (!(foo !== "hello")) {
	alert("true");
}

if (null) {
	alert("hi");
}

alert(typeof null); // object







