
$(document).ready(function () {

    $(".itembox div:first").hide();
    $(".item-delete").click(function () {
        $(this).parent().remove();
    });

    $("button").click(function () {
        var no = parseInt($(".item-no:last h3").text())+1;
        $(".itembox").append("<div></div>");
        $(".itembox div:last").addClass("item");
        $(".item:last").append("<div></div>");
        $(".item:last div:last").addClass("item-no");
        $(".item-no:last").append("<h3></h3>");
        $(".item-no:last h3:last").append(no);
        $(".item:last").append("<div></div>");
        $(".item:last div:last").addClass("item-delete");
        $(".item-delete:last").append("<h3></h3>");
        $(".item-delete:last h3:last").append("Delete");
        $(".item-delete").click(function () {
            $(this).parent().remove();
        });
    });
});