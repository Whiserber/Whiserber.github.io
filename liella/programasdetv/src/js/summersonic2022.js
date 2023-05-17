var serverSelect = document.getElementById('select_server');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/koao02ov5jqw";

serverSelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);

function updateVideo(){
    var serverValue = serverSelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S2")
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://louishide.com/e/koao02ov5jqw";
        }
        else
        {
            videoIframe.src = "https://louishide.com/e/yam18966wptc";
        }
        
    }
    else
    {
        if(partValue == "P1")
        {
            videoIframe.src = "https://lvturbo.com/e/9uavso2byf9v";
        }
        else
        {
            videoIframe.src = "https://lvturbo.com/e/q7oxeh5l6ae2";
        }
    }
    
}
