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
        public HttpResponseMessage Get()
        {
            HttpContext.Current.AcceptWebSocketRequest(new BraceletWebSocketHandler());
            return Request.CreateResponse(HttpStatusCode.SwitchingProtocols);
        }

        [HttpPut]
        public void Update([FromBody] BraceletState state)
        {
            BraceletWebSocketHandler.BroadCast(state);
        }
    }
}
