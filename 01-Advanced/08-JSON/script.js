/**
 * script.js Discription
 * @ Stephen O'Connor, 09-Feb-2015
 *
 * Dependencies:
 *
 */

// immediately invoked anonymous function
(function() {

	xhr.open("GET", "textfile.txt", true);
	xhr.setRequestHeader("Content-Type",
		"application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var status = xhr.status;

			if ((status >= 200 && status < 300) ||
				status === 304) {
				var rss = JSON.parse(xhr.responseText)
				alert(rss.channel.title);
			} else {
				alert(status);
			}
		}
	};

	xhr.send(null);

}());