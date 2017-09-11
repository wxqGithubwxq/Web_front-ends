
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    public class AjaxTest : IHttpHandler
    {
     public bool IsReusable
        {
            get { return true; }
        }
        public void ProcessRequest(HttpContext context)
        {
           //string p = context.Request.QueryString["province"];
           //string c = context.Request.QueryString["city"];
            string p = context.Request.Form["province"];
            string c = context.Request.Form["city"];
            string s = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
            //string xml = "<?xml version='1.0' encoding='gb2312'?>";
            //xml = xml + "<zone><province>'" + p + "'</province><city>'" + c + "'</city></zone>";
            string json = "{\"province\":\"" + p + "\",\"city\":\"" + c + "\"}";
            context.Response.Clear();
            context.Response.ContentType = "text/plain";
            //context.Response.Write(s);
            //context.Response.Write("Hello,World!文许桥");
            //context.Response.ContentType = "text/xml";
            context.Response.Write(json);
            context.Response.Flush();
        }
    }
}