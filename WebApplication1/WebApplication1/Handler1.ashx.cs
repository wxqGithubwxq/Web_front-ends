using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    /// <summary>
    /// Handler1 的摘要说明
    /// </summary>
    public class Handler1 : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
           // string p = context.Request.QueryString["province"];
           // string c = context.Request.QueryString["city"];
            context.Response.Clear();
            context.Response.ContentType = "text/plain";
            //context.Response.Write(p + " " + c);
            context.Response.Write("Hello,World!");
           context.Response.Flush();
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}