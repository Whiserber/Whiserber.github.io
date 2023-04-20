var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/1123yyh1xy7x/_LLP_Koi_Snowy__Vlog_Reuni_n_-_Dragalia_Lost";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/1123yyh1xy7x/_LLP_Koi_Snowy__Vlog_Reuni_n_-_Dragalia_Lost";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/7x7m631u5ra7";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/0nb76u72viu5";
    }
    
}
