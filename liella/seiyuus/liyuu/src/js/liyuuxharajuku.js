var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/f6yetc620tcb/_LLP_Koi_Snowy__Vlog_-_Liyuu_x_Harajuku";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/f6yetc620tcb/_LLP_Koi_Snowy__Vlog_-_Liyuu_x_Harajuku";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/hq5wjb8rwxzb";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/5ciuo07li2je";
    }
    
}
