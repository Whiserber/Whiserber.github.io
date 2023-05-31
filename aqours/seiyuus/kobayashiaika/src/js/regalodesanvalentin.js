var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/i006dms9hxpu/_LLP__Kobayashi_Aika_Birthday_FC_Regalo_de_San_Valent_n";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/i006dms9hxpu/_LLP__Kobayashi_Aika_Birthday_FC_Regalo_de_San_Valent_n";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://ahvsh.com/e/3oy0g1q1kwfg";
    }
    else
    {
        videoIframe.src = "https://sbrapid.com/e/qxe35akw2tig";
    }
    
}
