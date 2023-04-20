var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/q0pz5be0z1u4/_LLP_Koi_Snowy__Vlog_-_Viaje_a_Se_l";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/q0pz5be0z1u4/_LLP_Koi_Snowy__Vlog_-_Viaje_a_Se_l";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/dicwawkihsab";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/lqgw8b0m6swk";
    }
    
}
