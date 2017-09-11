<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebApplication1.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
     <script type="text/javascript" language="JavaScript" src="NewFolder1/jquery-1.10.2.js"></script>
    <script type="text/javascript" language="JavaScript" src="NewFolder1/JavaScript1.js">
    </script>
</head>
<body>
    <form id="form1" runat="server">
    <div style="height: 33px; width: 152px">    
        网址导航</div>
    </form>
    <audio src="G:/KuGou/AQTT.mp3" controls="controls" autoplay="autoplay">爱情天堂</audio>
    
    <button onclick="creatWin()">点击创建一个新窗口</button>
    <marquue bgcolor="red" direction="left" scrollamout="10" scrolldelay="100" height="100" behavior="ALTERNATE">
            <font color="black">太平洋网络学院</font>
        </marquue>
    <script type="text/javascript">
        function creatWin() {
            var w = window.open();
            w.document.write("新窗口");
        }
        var v = "What's your name?<br>";
        function f() {
            var v = "My name is wenxuqiao.";
            return v;
        }
        document.write("This is a script!<br>");
        document.write(v);
        document.write(f());
        alert("This is an apple!");
    </script>
   
</body>
</html>
