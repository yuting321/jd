/**
 * Created by YT on 2017/5/5.
 */
var i=0;
var set;
var num = $(".pic").length - 1;
time();
for(var j=0;j<num;j++){
    $(".storge-circle").append('<div class="circle"></div>');
}

$(".ppt").mouseover(function () {
    clearInterval(set);
});

$(".ppt").mouseleave(function () {
    time();
});

$(".right").click(function () {
    if(i<$(".pic").length -1){
        i++;
    }else {
        i=0;
    }
    $(".pic").eq(i).fadeIn(1000/3).siblings(".pic").hide();
    $(".circle").eq(i).attr('class','circle h');
    $(".circle").eq(i).siblings(".circle").attr('class','circle');
});
$(".right").mouseover(function () {
    $(".right").addClass("click");

});

$(".left").click(function () {
    if(i > 0){
        i--;
    }else {
        i=$(".pic").length -1;
    }
    $(".pic").eq(i).fadeIn().siblings(".pic").hide();
    $(".circle").eq(i).addClass("h").siblings(".circle").removeClass("h");
});

$(".left").mouseover(function () {
    $(".left").addClass("click");
});

$(".circle").click(function () {
    var ind =$(this).index();
    $(".pic").eq(ind).fadeIn().siblings(".pic").hide();
    $(".circle").eq(ind).addClass("h").siblings(".circle").removeClass("h");
});

function time(){
    set =setInterval(function () {
        if(i<$(".pic").length -1){
            i++;
        }else {
            i=0;
        }
        $(".pic").eq(i).fadeIn().siblings(".pic").hide();
        $(".circle").eq(i).addClass("h").siblings(".circle").removeClass("h");
    },1500);

}