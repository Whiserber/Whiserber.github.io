var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/dnl67tueac5p";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/dnl67tueac5p";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/aez3afucr65j";
    }
    
}
