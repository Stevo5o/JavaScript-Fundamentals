/**
 * script.js
 * @ Stephen O'Connor, Febuary 2015
 *
 * Dependencies:
 * jQuery
 */


// jQuery AJAX call
$.ajax({
			url: 'data.json',
			dataType: 'json',
			type: 'get',
			cache: false,
			success: function(data) {
				  // display links on page
         var output = "";
         $.each( data, function ( key, val )
         {
            for ( var i = 0; i < val.length; i++ )
            {
               var user = val[i];
               output +=
                       "<li><a id='" +
                       user.id +
                       "' href='#" +
                       user.id + 
                       "'>" +
                       "&Tilde;" +
                       user.username +
                       "</a></li>";
            }
            $( 'ul#users' ).append( output );
         } );
      }
   } );
			
	
                
 
                