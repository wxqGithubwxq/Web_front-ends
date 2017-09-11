using System;
using System.Collections.Generic;
using System.Data.OleDb;
using System.Linq;
using System.Web;

namespace WebApplication1
{
    /// <summary>
    /// PagedBrowse 的摘要说明
    /// </summary>
    public class PagedBrowse : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            string s = "";
            string resp="";
            try
            {
                s = context.Request.QueryString["pageIndex"];
                int pageIndex = int.Parse(s);
                int pageSize = 10;
                int i=0;
                int j=pageIndex*pageSize;
                string connection ="Provider=Microsoft.ACE.OleDb.12.0;Data Source="+context.Server.MapPath("省份城市.accdb")+"";
                //string connection = "Provider=Microsoft.ACE.OleDb.12.0;Data Source='D:\AutoStudy\WebApplication1\省份城市.accdb'";
                string str = "select Pname,Cname from cites order by Pname,Cname";
                OleDbConnection con = new OleDbConnection(connection);
                con.Open();
                OleDbCommand command = new OleDbCommand(str, con);
                OleDbDataReader reader = command.ExecuteReader();
                while(reader.Read())
                {
                    if(i>=j&&i<j+pageSize)
                    {
                        if (resp != "")
                            resp += ",";
                        resp += "{\"province\":\"" + reader["Pname"].ToString() + "\",\"city\":\"" + reader["Cname"].ToString() + "\"}";                       
                    }
                    ++i;
                }
                int pageCount = i / pageSize;
                if (i%pageSize!=0)
                    pageCount += 1;
                resp = "{\"state\":\"OK\",\"count\":" + pageCount + ",\"zones\":[" + resp + "]}";
                reader.Close();
                con.Close();
            }
            catch(Exception e)
            {
                resp = "{\"state\":" + getJsonValue("error:" + e.Message) + "}";
            }
            context.Response.Clear();
            context.Response.ContentType = "text/plain";         
            context.Response.Write(resp);
            context.Response.Flush();
        }
        private string getJsonValue(string s)
        {
            string st = "";
            for (int i = 0; i < s.Length;i++ )
            {
                char c = s[i];
                string str="";
                if (c == '"')
                    str = "\"";
                else if (c == '\\')
                    str = "\\\\";
                else if (c == '\n')
                    str = "\\n";
                else if (c == '\r')
                    str = "\\r";
                else
                    str = ""+c;
                st += str;
            }
                return "\""+st+"\"";


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