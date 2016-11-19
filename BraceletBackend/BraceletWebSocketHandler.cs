using BraceletBackend.Models;
using Microsoft.Web.WebSockets;
using Newtonsoft.Json;

namespace BraceletBackend
{
    public class BraceletWebSocketHandler : WebSocketHandler
    {
        public static readonly WebSocketCollection Sockets = new WebSocketCollection();

        public override void OnOpen()
        {
            Sockets.Add(this);
        }

        public override void OnMessage(string message)
        {
            Sockets.Broadcast(message);
        }

        public static void BroadCast(BraceletState state)
        {
            var json = JsonConvert.SerializeObject(state);
            Sockets.Broadcast(json);
        }
    }
}