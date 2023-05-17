var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/cm7wyt26c4oq";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/cm7wyt26c4oq";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/fekgqh44kdib";
    }
    
}
