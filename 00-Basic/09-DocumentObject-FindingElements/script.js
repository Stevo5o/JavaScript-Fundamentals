// anonymous function
(function() {

	// var pElements = document.querySelectorAll("div p"); // CSS qyueries - newer getElementsByTagName()	
	
	// alert(pElements.length);

	var pElement = document.querySelector("#foo"); // CSS qyueries - newer getElementsById()	
	
	alert(pElement.parentNode.tagName);

	// for (var i = 0, len = pElements.length; i < len; i++) {
	// 	alert(pElements[i]);
	// }

}());