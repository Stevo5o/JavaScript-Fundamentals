// recursion
javascript: 
function fibo(n)
	{     
	if (n < 2) return n
	return fibo(n-2) + fibo(n-1)
	}  
	for (var i = 1; i < 25; i++) 
	{   
	document.write(i + " = " + fibo(i) + "<br>") 
	}