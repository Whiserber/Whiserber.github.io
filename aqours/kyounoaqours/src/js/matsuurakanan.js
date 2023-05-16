var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/9h5osxz51wlz";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/9h5osxz51wlz";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/mv6ptgdotvip";
    }
    
}
