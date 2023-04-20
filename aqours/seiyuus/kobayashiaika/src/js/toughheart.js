var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/8ltrik5spzpn/Kobayashi_Aika_Tough_Heart";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/8ltrik5spzpn/Kobayashi_Aika_Tough_Heart";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/px62l1u3dyqs";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/e7cwg21dbb6e";
    }
    
}
