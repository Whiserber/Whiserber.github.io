var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/j7fpkvwibte6/_LLP_Koi_Snowy__Vlog_en_el_sal_n_de_belleza";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/j7fpkvwibte6/_LLP_Koi_Snowy__Vlog_en_el_sal_n_de_belleza";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/f107j4gkt9og";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/74sh76fi0xu9";
    }
    
}
