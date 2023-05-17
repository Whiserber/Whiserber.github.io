var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/fouds7lbjw7u";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/fouds7lbjw7u";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/s7bm2mlogijq";
    }
    
}
