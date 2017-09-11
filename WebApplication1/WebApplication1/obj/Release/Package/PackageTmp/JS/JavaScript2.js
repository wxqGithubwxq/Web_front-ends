var v = "What's your name?<br>";
function f() {
    var v = "My name is wenxuqiao.";
    return v;
}
function Point(a, b) {
    //this.a=a;
    //this.b=b;
    // var point = function (x) {

    // }
    var point = new Object();
    point.toString = function () {
        //return "(" + a + "," + b + ")";
        return "(" + [a, b] + ")";
    }
    point.valueOf = function () {
        var c = a + b;
        return c;
    }
    point.getReturn = function () {
        return a + "x*3" + b + "x=3";
    }
    return point;
}

var p = new Point(String("1"), String("2"));
p.f = f();
document.write(p.f);
//p.f = f;
// document.write(p.f());
document.write("This is a script!<br>");
document.write(v);
document.write(f() + "<br>");
document.write(p.toString() + "<br>");
document.write(p.getReturn());
alert("This is an apple!");
document.alinkColor = "#00ff00";
document.linkColor = "#ff0000";
document.vlinkColor = "0000ff";
document.fgColor = "blue";
//document.bgColor = "#000000";

function creatWin() {
    var w = window.open();
    w.document.write("<button onclick='window.close()'>关闭窗口</button>");
    w.document.write(document.getElementsByTagName("textarea")[0].innerText);
}