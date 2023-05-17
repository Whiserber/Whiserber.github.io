var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/d59fdcheurmu";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/d59fdcheurmu";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/tl9vq2zlfkj4";
    }
    
}
