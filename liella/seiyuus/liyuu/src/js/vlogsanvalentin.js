var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/r54hbywat1rj/_LLP_Koi_Snowy__Vlog_de_San_Valentin";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/r54hbywat1rj/_LLP_Koi_Snowy__Vlog_de_San_Valentin";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/awqve3v9wwko";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/ii7f9t9oy353";
    }
    
}
