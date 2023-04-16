var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/3kj1an2frk7y/_2021-07-15__Dibujando_a_Sakura-chan";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/3kj1an2frk7y/_2021-07-15__Dibujando_a_Sakura-chan";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/xfavl4ft9lnb";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/6g2010719ju8";
    }
    
}
