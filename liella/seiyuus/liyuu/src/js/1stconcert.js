var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/cw9t2mg355qe/_LLP_Koi_Snowy__Making_of_Liyuu_1st_Concert";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/cw9t2mg355qe/_LLP_Koi_Snowy__Making_of_Liyuu_1st_Concert";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/3vfq5la07nhv";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/udpy3ndjdv8e";
    }
    
}
