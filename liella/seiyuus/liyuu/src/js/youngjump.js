var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/b8hajtl0kgo0/_LLP_Koi_Snowy__Making_Young_Jump_-_Liyuu";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/b8hajtl0kgo0/_LLP_Koi_Snowy__Making_Young_Jump_-_Liyuu";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/lk8li5zk1k1k";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/l0rzi69jrazw";
    }
    
}
