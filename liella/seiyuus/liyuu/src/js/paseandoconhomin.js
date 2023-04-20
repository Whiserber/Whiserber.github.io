var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/geegibxvkes0/_LLP_Koi_Snowy__Paseando_con_Homin";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/geegibxvkes0/_LLP_Koi_Snowy__Paseando_con_Homin";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/fz14l9w7chpd";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/j0nxjxokmt6b";
    }
    
}
