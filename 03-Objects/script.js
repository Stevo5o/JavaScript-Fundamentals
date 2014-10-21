var obj = "This is a string object.",
	lenght = obj.lenght; // 24
// index	
var index1 =  obj.indexOf("is"); // 2
var index2 =  obj.indexOf("is", index1 + 1); // 5
var index3 =  obj.lastIndexOf("is"); // 5
var index4 =  obj.lastIndexOf("is", index3 - 1); // 2

alert(index1);
alert(index2);
alert(index3);
alert(index4);

// substring
var substr1 = obj.substr(0, 4); // This
var substr2 = obj.substr(10, 6); // string


alert(substr1);
alert(substr2);

//  indexof substr
var index0 = obj.indexOf("ob");
var substr0 = obj.substr(index0, 6);
var substring = obj.substring(0, 4);

alert(substr0);
alert(substring);

var newString = obj.replace("object", "value");

alert(newString);

var upperCase = obj.toUpperCase(),
    lowerCase = obj.toLowerCase();
    
 alert(upperCase);
 alert(lowerCase);