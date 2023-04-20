var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/f1ubmiqbz4qj/_LLP_Koi_Snowy__Vlog_-_Dance_Practice";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/f1ubmiqbz4qj/_LLP_Koi_Snowy__Vlog_-_Dance_Practice";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/zhbbb42rayrx";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/060cg97act7q";
    }
    
}
