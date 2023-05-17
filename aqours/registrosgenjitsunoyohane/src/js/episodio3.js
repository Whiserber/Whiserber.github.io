var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/5zx1xvyw2az8";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/5zx1xvyw2az8";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/noy7tiasga04";
    }
    
}
