var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/leagner243d4/_LLP_Koi_Snowy__Making_of_Itsumademo__Zutto_-_Liyuu_Photobook";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/leagner243d4/_LLP_Koi_Snowy__Making_of_Itsumademo__Zutto_-_Liyuu_Photobook";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/ibs38wir0pj4";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/pncclw8j6pux";
    }
    
}
