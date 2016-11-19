document.addEventListener('DOMContentLoaded', function () {
    var logArea = document.getElementById('log-area');
    var colorBox = document.getElementById('color-box');
    log('loaded');
    
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (WebSocket) {
        log('start websocket');
        startWebSocket();
    } else {
        log('start pull');
        startPull();
    }
    
    function startWebSocket() {
        var uri = 'wss://braceletbackend.azurewebsites.net/api/bracelet';
        log(uri);
        var websocket = new WebSocket(uri);
        log('websocket created');
        
        websocket.onopen = function () { log('connected to websocket'); };
        websocket.onerror = function (error) { log('websocket error: ' + error); };
        websocket.onmessage = function (message) { handleMessage(message); };

        function handleMessage(message) {
            var data = JSON.parse(message.data);
            handleData(data);
        }
    }
    
    function startPull() {
        var uri = 'http://braceletbackend.azurewebsites.net/api/braceletfallback';
        log(uri);
        pullLoop();
        
        function pullLoop() {
            setTimeout(function () {
                log('in loop');
                doRequest();
                pullLoop();
            }, 1000);
        }

        function doRequest() {
            var httpRequest = new XMLHttpRequest();

            if (!httpRequest) {
                log('Cannot create an XMLHTTP instance');
                return;
            }
            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState === XMLHttpRequest.DONE) {
                    if (httpRequest.status === 200) {
                        var data = JSON.parse(httpRequest.responseText);
                        handleData(data);
                    } else {
                        log('Uri: ' + uri + ' returned status: ' + httpRequest.status);
                    }
                }
            };
            httpRequest.open('GET', uri);
            httpRequest.send();
        }
    }
    
    function handleData(data) {
        log(data);
        if (navigator.vibrate && data.IsVibration === true) {
            log('vibration started');
            navigator.vibrate(500);
        }
        if (data.HasColor === true && data.Color) {
            log('color:' + data.Color);
            colorBox.style.backgroundColor = data.Color;
        } else {
            log('white');
            colorBox.style.backgroundColor = 'white';
        }
    }
    
    function log(message) {
        if (logArea) {
            var value = logArea.value;
            value = value + '\n' + message;
            logArea.value = value   
        }
        console.log(message);
    }
});