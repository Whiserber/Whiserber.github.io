var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/27btqq4t7bc2/_2021-03-21__Probando_comida_picante";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/27btqq4t7bc2/_2021-03-21__Probando_comida_picante";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/rnckg5e4sr1q";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/35sxel866pw6";
    }
    
}
