/* @ Stephen O'Connor */
// The DOM is slow
(function () {

   var doc = document, // create the document makes the code a little bit more effcient 
           // zx = doc.createElement("p"),
           // content = doc.createTextNode("<strong>This was dynamically created</strong>");
   pFoo = doc.getElementById("foo"); // faster than querySelector

   var html = pFoo.innerHTML;
   
   html = html + "<br />This was, too";
   html = html + "<br />This was, too 2";
   html = html + "<br />This was, too 3";
   
   pFoo.innerHTML = html; // remove content of element - set to empty string ""

   //zx.innerHTML = "<strong>This was dynamically created</strong>";
   // zx.appendChild(content);
   // zx.setAttribute("align", "center");
   // zx.id = "bar";

   // pFoo.parentNode.appendChild(zx);

   // pFoo.parentNode.insertBefore(zx, pFoo);

   // pFoo.parentNode.insertBefore(zx, pFoo);

   // pFoo.parentNode.replaceChild(zx, pFoo);
   
//   zx.innerHTML = zx.innerHTML + "<br />This was, too";   
//   zx.innerHTML = zx.innerHTML + "<br />This was, too 2";
//   zx.innerHTML = zx.innerHTML + "<br />This was, too 3";

   // document.body.appendChild(zx);

}());