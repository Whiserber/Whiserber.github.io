var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/obfqo9v0bk4b";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/obfqo9v0bk4b";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/mqsfptr0ig3l";
    }
    
}
