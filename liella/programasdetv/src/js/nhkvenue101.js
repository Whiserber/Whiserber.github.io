var serverSelect = document.getElementById('select_server');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/ubigrablq0ar	";

serverSelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);

function updateVideo(){
    var serverValue = serverSelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S2")
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://louishide.com/e/ubigrablq0ar	";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://louishide.com/e/nhqflfgvgl03";
        }
        else if(partValue == "P3")
        {
            videoIframe.src = "https://louishide.com/e/ai96uic8icbq";
        }
        else if(partValue == "P4")
        {
            videoIframe.src = "https://louishide.com/e/rf0bft0ufaex";
        }
        else if(partValue == "P5")
        {
            videoIframe.src = "https://louishide.com/e/nbqi3haovbiv";
        }
        
    }
    else 
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://lvturbo.com/e/pxjvz8h2z8fj";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://lvturbo.com/e/4fksv64yx0ba";
        }
        else if(partValue == "P3")
        {
            videoIframe.src = "https://lvturbo.com/e/2k9gy42p7cja";
        }
        else if(partValue == "P4")
        {
            videoIframe.src = "https://lvturbo.com/e/nvf6c54q0k81";
        }
        else if(partValue == "P5")
        {
            videoIframe.src = "https://lvturbo.com/e/6lyunix53xqy";
        }
    }
    
}
