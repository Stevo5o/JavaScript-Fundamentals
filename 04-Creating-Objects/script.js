/* var person = new Object();

person.firstName = "Stephen";
person.lastName = "O'Connor";
person.getFullName = function() {
	return this.firstName + " " + this.lastName;
}; */

var person = {
	firstName : "Stephen", 
	lastName : "O\'Connor",
	getFullName : function() {
		return this.firstName + " " + this.lastName;
	}
};

alert(person.getFullName());