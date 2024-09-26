var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/tnvnxg7dtb5g";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/tnvnxg7dtb5g";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://filemoon.sx/e/3zh0lt2nvi8g";
    }
    
}