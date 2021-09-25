$(function() {

$(".green.box").delay(15000).fadeTo(5000,0.3)


$(".red.box").delay(25000).fadeTo(5000,0.3)


$(".black.box").delay(5000).show(5000).delay(10000).hide(5000)

$(".orange.box").delay(5000).show(5000).delay(5000).hide(5000)
 
 $("img").delay(5000).hide(3000).show(3000);

 // $(".green.box").hide(1000).delay(1000).show(1000);

$("#list").find("li").css("background-color", "rgba(180, 180, 20, 0.8)");

$("more").toggle()
                  

  $(":header").next().css("background-color", "purple");
                     
 



  
  });
