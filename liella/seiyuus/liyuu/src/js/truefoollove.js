var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/792qkfziu91j/_LLP_Koi_Snowy__Making_of_TRUE_FOOL_LOVE";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/792qkfziu91j/_LLP_Koi_Snowy__Making_of_TRUE_FOOL_LOVE";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/ff27tc7fotez";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/ezkd90jr8yqo";
    }
    
}
