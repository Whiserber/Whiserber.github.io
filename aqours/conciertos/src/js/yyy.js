var serverSelect = document.getElementById('select_server');

var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/lokz4yl4u22w";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;

    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/lokz4yl4u22w";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://ahvsh.com/e/k13rkxb066sc";
        
    }
    else
    {
        videoIframe.src = "https://likessb.com/e/jc5eabmwy50r";
       
    }

    
}
