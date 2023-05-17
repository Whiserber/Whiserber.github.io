var serverSelect = document.getElementById('select_server');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/w1qrype5gvjp";

serverSelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);

function updateVideo(){
    var serverValue = serverSelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S2")
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://louishide.com/e/w1qrype5gvjp	";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://louishide.com/e/7dg4twnc9fvg";
        }
    }
    else
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://lvturbo.com/e/4r5bhmzzrhep";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://lvturbo.com/e/97ctshd6doc4";
        }
    }
    
}
