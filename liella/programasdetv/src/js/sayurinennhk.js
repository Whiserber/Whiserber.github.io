var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/c666fe4hn3c8";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/c666fe4hn3c8";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/6it0dkd7pgc6";
    }
    
}
