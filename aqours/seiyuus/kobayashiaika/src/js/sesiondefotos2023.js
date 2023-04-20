var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/l699bbw60to7/Aika_Kobayashi_Sesi_n_de_Fotos_2023";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/l699bbw60to7/Aika_Kobayashi_Sesi_n_de_Fotos_2023";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/96lwt36pjvoq";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/23q4qpfzgvtf";
    }
    
}
