var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/a5zgc1k305mu/_LLP_Koi_Snowy__Making_of_Major_Photobook";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/a5zgc1k305mu/_LLP_Koi_Snowy__Making_of_Major_Photobook";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/afl1whpyfsmz";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/de9dc6sh1kr5";
    }
    
}
