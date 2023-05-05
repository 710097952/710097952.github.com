
$(document).ready(function () {
    $(".menubar").children().click(function () {
        $(this).addClass("menu-but-active");
        $(this).removeClass("menu-but");
        $(this).siblings().addClass("menu-but");
        $(this).siblings().removeClass("menu-but-active");

        $(".box").remove();
        $("body").append("<div></div>");
        $("body div:last").addClass("box");
        $(".box").append("<h1></h1>");
        $(".box h1:last").append($(this).attr("id"));

   });
});