var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/svw2cf44j1mo";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/svw2cf44j1mo";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/dbh9lbz8qwxj";
    }
    
}
