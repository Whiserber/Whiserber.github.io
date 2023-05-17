var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/m87y9t04j9jk";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/m87y9t04j9jk";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/9ibnyjuqgl0i";
    }
    
}
