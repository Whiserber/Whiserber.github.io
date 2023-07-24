var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/vlhpapaesn4b";



serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);



function updateVideo(){
    var serverValue = serverSelect.value;
    var dayValue = daySelect.value;
    if(serverValue == "S1")
    {
        
        if(dayValue == "D1"){
            videoIframe.src = "https://filemoon.sx/e/vlhpapaesn4b";
        }
        else
        {
            videoIframe.src = "https://filemoon.sx/e/mpamhm6w6heu";
            
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            videoIframe.src = "https://ahvsh.com/e/hp54l8dunofw";
        }
        else
        {
            videoIframe.src = "https://ahvsh.com/e/g8tak9j2mf32";
        }
    }
    else
    {
        if(dayValue == "D1"){ 
            videoIframe.src = "https://likessb.com/e/brrl7rax3auu";
        }
        else
        {
            videoIframe.src = "https://sblona.com/e/7xfoz8c1ee04.html";
        }
    }

    
}
