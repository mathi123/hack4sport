using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BraceletBackend.Controllers
{
    [EnableCors("*","*","*")]
    public class ClientController : ApiController
    {
        [HttpGet]
        public int Fallback()
        {
            return BraceletWebSocketHandler.Sockets.Count;
        }
    }
}
