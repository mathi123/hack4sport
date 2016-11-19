using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BraceletBackend.Models;

namespace BraceletBackend.Controllers
{
    [EnableCors("*","*","*")]
    public class BraceletFallbackController : ApiController
    {
        [HttpGet]
        public BraceletState Fallback()
        {
            return BraceletController.LastState;
        }
    }
}
