/**
 * Created by YT on 2017/5/6.
 */
var i=0;
  $(".left2").on("click",function () {
      console.log(2);
      if(i<$(".left-list").length -1){
          i++;
      }else {
          i=0;
      }
      $(".all2").stop(true).animate({"left":-i*990});
  })

$(".right2").on("click",function () {
    if(i>0){
        i--;
    }else {
        i=$(".left-list").length -1;
    }
    $(".all2").stop(true).animate({"left":-i*990});
})

 $(".left-list div img").mouseover(function(){
     $(this).stop(true).animate({"top":-10});

 });
$(".left-list div img").mouseleave(function(){
    $(this).stop(true).animate({"top":10});

});



