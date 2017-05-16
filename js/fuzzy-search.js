/**
 * Created by YT on 2017/5/8.
 */
   var data = [
    [
        "手机",
        "手表",
        "手机壳",
        "手机支架"
    ],
    [
        "外套男",
        "外套女",
        "外套女2017",
        "外套女春秋"
    ],
    [
        "电子秤",
        "电视机",
        "电饭煲",
        "电脑桌"
    ]
]
        var  key =0;
   //输入关键字，实现模糊查询
   $(".search-input input").keyup(function () {
       var val = $(this).val();
       if (val == "手") {
           $(".fuzzy").show();
           $(".fuzzy").html("");
           for (var j = 0; j < data[key].length; j++){
               $(".fuzzy").append("<p class='font2' onclick='add(this)'>" + data[0][j] +  "</p>")
           }
       }

       if (val == "外套") {
           $(".fuzzy").show();
           $(".fuzzy").html("");
           for (var j = 0; j < data[key].length; j++){
               $(".fuzzy").append("<p class='font2'>" + data[1][j]+ "</p>")
           }
       }
       if (val == "电") {
           $(".fuzzy").show();
           $(".fuzzy").html("");
           for (var j = 0; j < data[key].length; j++){
               $(".fuzzy").append("<p class='font2'>" + data[2][j] + "</p>")
           }
       }
       if(val==""){
           $(".fuzzy").hide();
       }
   });

      //点击模糊查询下的关键字,input中关键词显示
        function add(dom) {
            var value = $(dom).val();
            $(".search-input input").val(value);
        }




