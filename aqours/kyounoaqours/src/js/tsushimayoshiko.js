var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/3ws98z9lr8ri";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/3ws98z9lr8ri";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/uo8fj5mzlczw";
    }
    
}
