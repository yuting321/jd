/**
 * Created by YT on 2017/5/7.
 */
$(".sale").on("mouseover",function () {
    $(".new-content").addClass("h").siblings(".new-content2").removeClass("h");
})
$(".annouse-lk").on("mouseover",function () {
    $(".new-content2").addClass("h").siblings(".new-content").removeClass("h");
})