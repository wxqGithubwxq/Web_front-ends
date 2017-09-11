$(document).ready(function () {
    $("#mymodel").on("show.bs.modal", function () {
        alert("show.bs.modal");
    }).on("shown.bs.modal", function () {
        alert("shown.bs.modal");
    }).on("hide.bs.modal", function () {
        alert("hide.bs.modal");
    }).on("hidden.bs.modal", function () {
        alert("hidden.bs.modal");
    });
    $("#btnUp,#btnClose").click(function () {
        $("#mymodel").modal("toggle");
    });
    $("[data-toggle='popover']").popover();
    // $().popover("show");
    $("#btnLoading").click(function () {
        $(this).button("loading");
        setTimeout(function () {
            $("#btnLoading").button("reset");
        }, 1000);
    });
})