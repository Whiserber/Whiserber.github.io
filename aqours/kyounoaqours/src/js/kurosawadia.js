var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/k4oo5cjnk8cj";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/k4oo5cjnk8cj";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/fzt7jz7njf4x";
    }
    
}
