var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/41fp825kp80k";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/41fp825kp80k";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/vhxqgbme97ee";
    }
    
}
