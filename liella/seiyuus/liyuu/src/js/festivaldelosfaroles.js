var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/qrrz8c4o7xta/_LLP_Koi_Snowy__Vlog_-_Festival_de_los_Faroles";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/qrrz8c4o7xta/_LLP_Koi_Snowy__Vlog_-_Festival_de_los_Faroles";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/j1oe1t70t53q";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/4tbddug11gnj";
    }
    
}
