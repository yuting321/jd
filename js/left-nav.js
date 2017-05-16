/**
 * Created by YT on 2017/5/4.
 */
   //左侧导航点击显示商品分类
    $(".side-nav").mouseover(function () {
        $(".cover").show();
    })
$(".side-nav").mouseleave(function () {
    $(".cover,.detail,.detail2").hide();
})
    $(".ele").on("mouseover",function () {
        $(".detail").show();
    })
    $(".ele").on("mouseleave",function () {
        $(".detail").hide();
})
   $(".tool,").on("mouseover",function () {
       $(".detail2").show()   ;
   })


