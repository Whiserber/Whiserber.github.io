var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/kumkv2nmqpx9";

serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);



function updateVideo(){
    var serverValue = serverSelect.value;
    var dayValue = daySelect.value;

    if(serverValue == "S1")
    {
        if(dayValue == "D1"){
            videoIframe.src = "https://filemoon.sx/e/kumkv2nmqpx9";
        }
  
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            
            videoIframe.src = "https://ahvsh.com/e/opnkkc821w07";
        }
     
    }
    else
    {
        if(dayValue == "D1"){
            videoIframe.src = "https://sblona.com/e/rhselwxlc3o9";
        }
        
    }

    
}
