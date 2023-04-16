var serverSelect = document.getElementById('select_server');

var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/ysdfterycm6b/_LLP__Bushiroad_15_Aniversario_Aqours_YYY";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;

    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/ysdfterycm6b/_LLP__Bushiroad_15_Aniversario_Aqours_YYY";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/3nmi0wyoqac5";
        
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/w0upi8z8h6em.html";
       
    }

    
}
