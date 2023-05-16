var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/7fr2pfwg4my9";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/7fr2pfwg4my9";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/sh0vrbvm3tus";
    }
    
}
