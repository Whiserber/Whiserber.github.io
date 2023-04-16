var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/cz4kebi3o487/_2021-07-01__Comprando_en_Don_Quijote_con_5000_yenes";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/cz4kebi3o487/_2021-07-01__Comprando_en_Don_Quijote_con_5000_yenes";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/mieo85hfku8r";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/9h2357c4wzn0";
    }
    
}
