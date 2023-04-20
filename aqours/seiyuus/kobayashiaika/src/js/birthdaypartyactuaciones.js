var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/1d4aa5veq0m6/_LLP__Kobayashi_Birthday_Party!!_Actuaciones_";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/1d4aa5veq0m6/_LLP__Kobayashi_Birthday_Party!!_Actuaciones_";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/5y0r7qt5t0z0";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/k96hais98h4x";
    }
    
}
