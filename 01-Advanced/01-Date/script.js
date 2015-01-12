/* @ Stephen O'Connor */
  (function() {
     
     date = new Date();
     console.log(date);
     
     date = new Date(2000, 0, 1, 22, 5, 30, 998),
      date2 = new Date(2000, 0, 1, 22, 5, 30, 999);
      
      // cannot use == 
      // date.getTime() === date2getTime()
      if (date < date2 )
      {
         console.log("date is less than date2");
      }
      else
      {
         console.log("date is not less than date2");
      }
      
     console.log(date);
     
     date = new Date(865220700000);
     
     months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June"
     ];     
     
     month = months[date.getMonth()];
     console.log(month);
     console.log(date.getFullYear());
     console.log(date.getMonth());
     
     // get a timestamp
     console.log(date.getTime());
     
     date.setMonth(3);
     console.log(date);

     date.setMonth(date.getMonth() - 1);
     console.log(date);
     
     
  }());