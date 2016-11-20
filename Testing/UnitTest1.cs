using System;
using System.Diagnostics;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Testing
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            var chrome = @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe";
            var url = "http://braceletfrontend.azurewebsites.net/ --new-window --window-position={0},{1}";

            int x = 0;
            int y = 0;
           
                for (int i = 0; i < 20; i++)
                {
                    Process.Start(chrome, String.Format(url, x, y + i * 300));
                }
            
        }
    }
}
