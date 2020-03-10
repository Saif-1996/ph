
$(document).ready(function(){
  var pic = ["a.png", "b.png", "c.png", "d.png" , "e.png" , "f.png" , "g.png" , "h.png","g.png","h.png","e.png","d.png","b.png","a.png","f.png","c.png"];
var i;
  for (i = 0; i < pic.length; i++) {

$("#l"+i+" img").attr("src","images/"+pic[i]);


  }
  $(".card").click(function(){


$(this).css(" trasform", "rotateY(180deg) ");



  });
  
// $(".card").click(function(){
//     $(".card").flip({
//         trigger: 'hover'
//     });


// }
// $(".sss").bind("paste", function(e) {
//      var text = e.event;
//      alert(text);
// })

//  $(".sss").bind("copy cut paste mousedown",function(e) {
//      // e.after("<p>ww.google.com</p>");
//                      // $(".sss").text("copy. not allowed!"); 
// e.preventDefault();
//   });
});
