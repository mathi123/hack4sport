using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using BraceletBackend.Models;
using Microsoft.Web.WebSockets;

namespace BraceletBackend.Controllers
{
    [EnableCors("*","*","*")]
    public class BraceletController : ApiController
    {
        public static BraceletState LastState = new BraceletState()
        {
            IsVibration = false,
            Color = "white",
            HasColor = true
        };

        public HttpResponseMessage Get()
        {
            HttpContext.Current.AcceptWebSocketRequest(new BraceletWebSocketHandler());
            return Request.CreateResponse(HttpStatusCode.SwitchingProtocols);
        }

        [HttpPut]
        public void Update([FromBody] BraceletState state)
        {
            LastState = state;
            BraceletWebSocketHandler.BroadCast(state);
        }
    }
}
