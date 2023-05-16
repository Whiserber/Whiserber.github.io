var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/9u9p1x0adff9";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/9u9p1x0adff9";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/62xy8k9frmsl";
    }
    
}
