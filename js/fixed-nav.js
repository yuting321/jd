/**
 * Created by YT on 2017/5/7.
 */
$("#back-top,.left-icon #to-top").click(function () {
    console.log(1);
    $("body").animate({"scrollTop":0});
})
//左边导航超过一屏的时候显示
$(window).scroll(function () {
    var w_t=$(window).scrollTop();
       if(w_t>900){
           $(".left-icon").show();
       }else{
           $(".left-icon").hide();
       }
})
// 窗口滚动到一定位置，左边导航背景改变
$(window).scroll(function () {
    var w_t=$(window).scrollTop();
    if(w_t>1000 && w_t <1840){
        $("#fashion").addClass("bg").siblings("div").removeClass("bg");
    }
    if(w_t>1840 && w_t<2670){
        $("#ele").addClass("bg").siblings("div").removeClass("bg");
    }
    if(w_t>2670 && w_t<3500){
        $("#sports").addClass("bg").siblings("div").removeClass("bg");
    }
    if(w_t>3500){
        $("#books").addClass("bg").siblings("div").removeClass("bg");
    }
})
 // 点击左侧导航，滚动响应位置
    $("#fashion").click(function () {
        $("body").animate({"scrollTop":1000});
    });
    $("#ele").click(function () {
        $("body").animate({"scrollTop":1840});
    });
    $("#sports").click(function () {
        $("body").animate({"scrollTop":2670});
    });
    $("#books").click(function () {
        $("body").animate({"scrollTop":3500});
    })

//鼠标悬浮显示动画效果
$(document).ready(function(){

    $('.right-icon .nav').mouseover(function(){
        $('.ani').removeClass("user-lk");
       var dom =  $(this).parent().children('div').eq(1);
        $(dom).addClass('user-lk');

    });
});

