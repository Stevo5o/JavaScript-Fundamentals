/* @ Stephen O'Connor */
  (function() {
     
     toThePower = function(num, exp)
     {
         var value = num;
     
     for (var i = 1; i < exp; i++)
     {
     	value = value * num;
     }
     return value;
     };    
     
     value  = toThePower(2, 3);
     console.log(value);

     value = Math.pow(2, 3);
     console.log(value);
     
     value = Math.sqrt(9);
     console.log(value);    
     
     value = Math.round(9.13);
     console.log(value);
     
     value = Math.ceil(9.53);
     console.log(value);
     
     value = Math.floor(9.99);
     console.log(value);   
     
     value = Math.max(20, 6, 10, 12, 75, 3);
     console.log(value);
         
     value = Math.min(20, 6, 10, 12, 75, 3.01, 3.02);
     console.log(value);
  
     value = Math.abs(-7);
     console.log(value);  
         
     value = Math.sin(30);
     console.log(value);
     
     value = Math.cos(30);
     console.log(value);
      
     value = Math.floor(Math.random() * 11);
     console.log(value);
     
     // constants
     value = Math.PI;
     console.log(value);
     
     value = Math.SQRT2;
     console.log(value);
  }());
  
  