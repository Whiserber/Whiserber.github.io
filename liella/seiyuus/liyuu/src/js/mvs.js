var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/yhl4fvkg2khl/_LLP_Koi_Snowy__Making_of_MVs_de_Liyuu";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/yhl4fvkg2khl/_LLP_Koi_Snowy__Making_of_MVs_de_Liyuu";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/6nfzb9o2qo6b";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/qex0mofms1i3";
    }
    
}
