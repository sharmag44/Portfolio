// var card = document.querySelectorAll(".card");
// for (var i=0; i<card.length;i++){
// card[i].addEventListener("mouseover",function(){
//   this.ClassList.add("press");
//   }
//   )
 

//  setTimeout(
//    function() {
//   var element = document.querySelectorAll(".card");
//   for(var i=0; i<element.length;i++){
//   element[i].classList.remove("press");
// }
//   },500);



// document.querySelector(".card").addEventListener("click",function(){
//   this.ClassList.add("press");
//   }
//   )
//   setTimeout(
//    function() {
//   var element = document.querySelector(".card");
//   element.classList.remove("press");
// },500);


$(document).ready(function(){
	$(".card").on("mouseover",function(){
$(this).addClass('press');
});
	$(".card").on("mouseout",function(){
	$(this).removeClass('press');
});
} );



setTimeout(function()
{
  $(".card").on("click",function(){
  $(this).fadeOut(100);
})
},50)


