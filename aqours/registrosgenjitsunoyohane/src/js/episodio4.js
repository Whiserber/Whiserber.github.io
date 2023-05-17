var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/8b6y5dmsb7r0";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/8b6y5dmsb7r0";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/3nkwgb3vt00p";
    }
    
}
