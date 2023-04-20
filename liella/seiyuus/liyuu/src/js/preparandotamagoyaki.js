var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/qrjlu8n3hii6/_LLP_Koi_Snowy__Vlog_-_Preparando_Tamagoyaki";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/qrjlu8n3hii6/_LLP_Koi_Snowy__Vlog_-_Preparando_Tamagoyaki";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/ubx9vbdohwo1";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/7aowz5jj7h0t";
    }
    
}
