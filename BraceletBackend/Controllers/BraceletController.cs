using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using BraceletBackend.Models;
using Microsoft.Web.WebSockets;

namespace BraceletBackend.Controllers
{
    public class BraceletController : ApiController
    {
        public static List<string> Colors = new List<string>()
        {
            "Yellow",
            "Green",
            "Blue",
            "Red",
            "Orange"
        };

        public HttpResponseMessage Get()
        {
            HttpContext.Current.AcceptWebSocketRequest(new BraceletWebSocketHandler());
            return Request.CreateResponse(HttpStatusCode.SwitchingProtocols);
        }
    }
}
