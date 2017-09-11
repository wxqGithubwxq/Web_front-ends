
$(document).ready(function () {
   
    var pagenum = 1;
    $("#more-photos").click(function (event) {
        event.preventDefault();
        var $link = $(this).attr("href");
        if ($link) {
            $.get($link, function (data) {
                $("#gallery").append(data);
                // $("#more-photos").appendTo("#gallery");
            });
        }
        // $("#gallery").append($("#gallery").html());
        pagenum++;
        if (pagenum < 3) {
            $("#more-photos").attr({ "href": "pages/" + pagenum + ".html" });
        }
        else {
            // $(this).hide();
            $(this).remove();
        }
    });
   /* $("div.photo").hover(function () {
        $(this).find(".details").fadeTo("fast", 0.7);
    }, function () {
        $(this).find(".details").fadeOut("fast");
    });*/
   $(document).on("mouseenter mouseleave","div.photo", function (event) {
        var $details = $(this).find(".details");
        if (event.type == "mouseenter") {
            $details.fadeTo("fast");
        } else {
            $details.fadeOut("fast");
        }
        });
    /*$("#gallery").on("mouseover mouseout", function (event) {
        //var $details = $(this).children().find(".details");
        var $target = $(event.target).closest("div.photo");
       var $details = $target.find(".details");
        var $related = $(event.relatedTarget).closest("div.photo");
        if (event.type == "mouseover"&&$target.length) {
            $details.fadeTo("fast");
        } else if(event.type=="mouseout"&&!$related.length) {
            $details.fadeOut("fast");
        }
    });*/
})