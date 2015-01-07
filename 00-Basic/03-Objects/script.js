//var obj = "This is a string object.",
//	lenght = obj.lenght; // 24
//// index	
//var index1 =  obj.indexOf("is"); // 2
//var index2 =  obj.indexOf("is", index1 + 1); // 5
//var index3 =  obj.lastIndexOf("is"); // 5
//var index4 =  obj.lastIndexOf("is", index3 - 1); // 2
//
//alert(index1);
//alert(index2);
//alert(index3);
//alert(index4);
//
//// substring
//var substr1 = obj.substr(0, 4); // This
//var substr2 = obj.substr(10, 6); // string
//
//
//alert(substr1);
//alert(substr2);
//
////  indexof substr
//var index0 = obj.indexOf("ob");
//var substr0 = obj.substr(index0, 6);
//var substring = obj.substring(0, 4);
//
//alert(substr0);
//alert(substring);
//
//var newString = obj.replace("object", "value");
//
//alert(newString);
//
//var upperCase = obj.toUpperCase(),
//    lowerCase = obj.toLowerCase();
//    
// alert(upperCase);
// alert(lowerCase);

var statement = "This is SteJ's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said \"This is SteJ\'s string\"';
console.log(statement3);

var path = "C:\\folder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\n" +
        "This is line 2\n" +
        "This is\t line 3";
console.log(multiline);

var part1 = "Hello";
var part2 = "World!";
var whole = part1 + " " + part2;
console.log(whole + "!!!!");

var length = whole.length;
console.log(whole + " " + length);

var index = whole.indexOf("World");
console.log(index);

var index2 = whole.indexOf("world");
console.log(index2);

if (whole.indexOf("W") !== -1)
{
   console.log("W exists in the string");
}
else
{
   console.log("W does not exist in the string");
}

console.log(whole.charAt(1));

var first = "Hello";
var second = "hello";

if (first.toLocaleLowerCase() === second.toLowerCase()) 
{
   console.log("The strings are equal");
}
else 
{
   console.log("The strings are not equal");
}

function compare(a, b)
{
   console.log(a + " < " + b, a < b);
}

compare('a', 'b');
compare('a', 'A');
compare('apples', 'oranges');
compare('apples', 'applications');