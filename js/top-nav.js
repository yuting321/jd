/**
 * Created by YT on 2017/5/7.
 */
//广告效果
$(document).ready(function () {
    $(".close").on("click",function () {
        $(".adver").remove();
        $(".nav").css("margin-top",0);

    });
})
//选择城市
$(".nav .pos,.top-banner .pos").mouseover(function () {
    $(".top-banner .pos").show();
     $(".nav .pos").css({"background":'white'});
})
$(".nav .pos,.top-banner .pos").mouseleave(function () {
    $(".top-banner .pos").hide();
    $(".nav .pos").css({"background":'#e3e4e5'});
})
//手机京东
$("#mobile-jd").on("mouseover",function () {
    $(".code").show();
})
$("#mobile-jd").on("mouseleave",function () {
    $(".code").hide();
})


$(".nav .my").mouseover(function () {
    $(".service").show();
})
//
$(".nav .my").mouseleave(function () {
    $(".service").hide();
})