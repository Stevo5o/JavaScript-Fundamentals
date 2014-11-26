/* @ Stephen O'Connor */
// The DOM is slow
(function () {

   var doc = document, // create the document makes the code a little bit more effcient 
           zx = doc.createElement("p"),
           // content = doc.createTextNode("<strong>This was dynamically created</strong>");
   pFoo = doc.getElementById("foo"); // faster than querySelector

   zx.innerHTML = "<strong>This was dynamically created</strong>";
   // zx.appendChild(content);
   // zx.setAttribute("align", "center");
   zx.id = "bar";

   // pFoo.parentNode.appendChild(zx);

   // pFoo.parentNode.insertBefore(zx, pFoo);

   // pFoo.parentNode.insertBefore(zx, pFoo);

   pFoo.parentNode.replaceChild(zx, pFoo);
   
   zx.innerHTML = zx.innerHTML + "<br />This was, too";   
   zx.innerHTML = zx.innerHTML + "<br />This was, too 2";
   zx.innerHTML = zx.innerHTML + "<br />This was, too 3";

   // document.body.appendChild(zx);

}());