/* @ Stephen O'Connor */
  (function() {
     
     x = ['some', 'extra', 'words', 'here'];

     y = ['a string', 3, ['a sub array', 2, 3, 4], 'Stephen', function(a, b) {return a + b}];

     z = [];

     my_array = [2, 3, 4];
     console.log(my_array);

     my_array.push(5);
     console.log(my_array.toString());

     value = my_array.pop();
     console.log(my_array);

     // adds to the start
     my_array.unshift(1);
     console.log(my_array.toString());

     // removes from the start
     value2 = my_array.shift();
     console.log(my_array);

     my_array2 = [10, 44, 32, 100, 44, 3, 4]
     my_array2.sort(my_array2);
     console.log(my_array2);

     my_array2.sort(function (a, b)
     {
     	// return a - b;
     	return Math.random() - 0.5;
     });

	console.log(my_array2);

	my_array.reverse();
	console.log(my_array);

  }());