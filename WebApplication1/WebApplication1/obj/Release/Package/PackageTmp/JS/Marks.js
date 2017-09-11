$(document).ready(function () {
   // $("a").nextAll().css({ color: "green" });
    // $("a.select").css({ color: "red" });
    function add() {
        $("tr:has(td):nth-child(odd)").addClass("highlight");
    }
    add();
    $("div.Marks a").click(function (event) {
        event.preventDefault();
        $("a.select").removeClass("select");
        $(this).addClass("select");
        var classify = $(this).text();
        $("tr").show();
        if (classify != "All") {
            // $("tr:has(td):not(:contains('" + classify + "'))").hide();
            $("tr:has(td)").not(function () {
                return $(this).children(":nth-child(5)").text() == classify;
            }).hide();
        }
        $("tr").removeClass("highlight");
        $("tr:visible:has('td')").filter(function (index) {
            return (index % 2) < 1;
        }).addClass("highlight");
    });
})