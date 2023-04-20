var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/x0kr08oxjv2m/_LLP__Kobayashi_Birthday_Party!!_Preparaci_n_";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/x0kr08oxjv2m/_LLP__Kobayashi_Birthday_Party!!_Preparaci_n_";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/iejbwb2ki34o";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/21dcz0atv6ix";
    }
    
}
