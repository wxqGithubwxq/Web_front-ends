/*$(document).ready(function () {
    $("#controlss-default").addClass("select").click(function () {
        $("p").removeClass("large").removeClass("narrow");
    });
    $("#controlss-large").click(function(){
        $("p").removeClass("narrow").addClass("large");
    });
    $("#controlss-narrow").click(function () {
        $("p").removeClass("large").addClass("narrow");
    });
    $("#controlss button").click(function () {
        $("#controlss button").removeClass("select");
        $(this).addClass("select");
    })
});*/
$(document).ready(function () {
    $("#controlss-default").addClass("select");
    var defaultSize = parseFloat($("p").css("fontSize"));
    $("#controlss button").click(function (event) {
        var sbutton = this.id.split("-")[1];
        $("#controlss button").removeClass("select");
        $(this).addClass("select");
        $("p").removeClass().addClass(sbutton);
        if (this.id != "controlss-large") {
            var num = parseFloat($("p").css("fontSize"));
            switch (sbutton) {
                case "bigger":
                    num *= 1.4;
                    break;
                case "smaller":
                    num /= 1.4;
                    break;
                default:
                    num = defaultSize;
                    break;
            }
            $("p").css("fontSize", num + "px");
        }
        else if($("a").is(":hidden")){
            $("p").removeAttr("style");
        }
        else{
            $("p").removeAttr("style");
        }
             event.stopPropagation();//阻止向上冒泡
        });
       $("#controlss h3").click(function (event) {
           $("#controlss button").toggleClass("hidden");
            var pWidth = $("#po").outerWidth();
             var dWidth = $(this).parent().outerWidth();
             $("#controlss").css({
                 position: "relative"
             }).animate({
                 borderWidth: "5px"
             }, "slow")
           .animate({ left: pWidth-dWidth}, "slow")
             .animate({ height: "+=20px" }, "slow")
           //.css({background:"red"});
           .queue(function (next) {
               $(this).css({ background: "red" });
               next();
           })
           event.stopPropagation(); 
        });
       
        $("#controlss").click(function () {
            $("#controlss button").toggleClass("hidden");
        });
        var triggers = {
            D: "default",
            L: "large",
            N: "narrow"
        };
        $(document).keyup(function (event) {
            var key = String.fromCharCode(event.which);
            if (key in triggers) {
                $("#controlss-" + triggers[key]).click();
            }
        });
        $("p").eq(1).hide();
        $("a.more").click(function (event) {
            event.preventDefault();
            // $("p").eq(1).show();
            // $("p").eq(1).slideDown("slow");//滑下
            //$("p").eq(1).fadeIn("slow");//淡入
            //$("p").eq(0).slideUp("slow");//滑出
           // $("p").eq(1).slideToggle("slow");//切换可见性
            //$("p").eq(1).toggle("slow");//切换可见性
            //$("p").eq(1).animate({ opacity: "toggle", height: "toggle" }, 5000);//opacity透明度，height高度可切换
            $("p").eq(1).fadeTo("slow",0.4);//渐变
           // $(this).hide();
        });
    //为每一个段落设置<a>链接，并实现back To top的 锚链
        $("<a href='#Top'>back To top</a>").insertAfter("#po p");
        $("<a id='Top'></a>").prependTo("body");
    //标注脚注
        $("span").each(function (index) {
            // $("<sup>" + (index + 1) + "</sup>").insertBefore(this);
            $(this).before(["<a href='#foot-", index + 1, "' id='context-", index + 1, "'><sup>", index + 1, "</sup></a>"].join(""));
            
         
        });
        $("span").css({ display: "block" }).insertBefore("#p2").wrapAll("<ol id='notes'/>").wrap("<li/>");
        $("span").each(function (index) {
            $(this).append(["&nbsp;(<a href='#context-", index + 1, "' id='foot-", index + 1, "'>context</a>)"].join(""));
        })
    });
    
