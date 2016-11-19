using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Timers;
using System.Web;
using System.Web.Http;
using System.Web.Routing;
using BraceletBackend.Controllers;
using BraceletBackend.Models;
using Newtonsoft.Json.Serialization;

namespace BraceletBackend
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        private static Timer _timer;
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            InitTimer();
        }

        public void InitTimer()
        {
            if (_timer == null)
            {
                _timer = new Timer();
                _timer.Interval = 1000;
                _timer.Elapsed += UpdateColor;
                _timer.Start();
            }
        }

        private BraceletState prevState = new BraceletState()
        {
            Color = "Yellow"
        };

        private void UpdateColor(object sender, ElapsedEventArgs e)
        {
            var state = new BraceletState()
            {
                HasColor = ! prevState.HasColor,
                NextVibration = DateTime.Now.Add(new TimeSpan(0, 0, 0, 1)),
                Color = BraceletController.Colors[(BraceletController.Colors.IndexOf(prevState.Color) + 1) % BraceletController.Colors.Count]
            };

            BraceletWebSocketHandler.BroadCast(state);
            prevState = state;
        }
    }
}