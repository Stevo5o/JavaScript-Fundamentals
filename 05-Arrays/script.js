var foo = [11, "hello", true];

foo[3] = 15;
foo[4] = "whatever";

// not working? foo[foo.lenght] = "a";
foo.push("new value");

alert(foo);

var names = ["Peter", "Henry"],
    names2 = ["Darragh", "Alan"];
    
var people = names.concat(names2);
    
var joined = people.join(", ");

var reversed = people.reverse();

var sorted = people.sort();

alert(joined);
alert(reversed);
alert(sorted);