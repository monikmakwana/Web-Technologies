function property()
{
    document.getElementById("name").innerHTML = window.navigator.appName;
    document.getElementById("code").innerHTML = window.navigator.appCodeName;    
    document.getElementById("engine").innerHTML = window.navigator.product;    
    document.getElementById("ver").innerHTML = window.navigator.appVersion;
    document.getElementById("platform").innerHTML = window.navigator.platform;
    document.getElementById("agent").innerHTML = window.navigator.userAgent;
    
}
