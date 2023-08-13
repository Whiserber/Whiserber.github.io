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
        else if(dayValue == "D2"){
            videoIframe.src = "https://filemoon.sx/e/k1vrrw6i9a2g";
        }
        else if(dayValue == "D3"){
            videoIframe.src = "https://filemoon.sx/e/3rbn8ecawxmx";
        }
        else if(dayValue == "D4"){
            videoIframe.src = "https://filemoon.sx/e/8jnmot5glzls";
        }
        else if(dayValue == "D5"){
            videoIframe.src = "https://filemoon.sx/e/g9zqulbwuy94";
        }
        else if(dayValue == "D6"){
            videoIframe.src = "https://filemoon.sx/e/88ghvukwttct";
        }
        else if(dayValue == "D7"){
            videoIframe.src = "https://filemoon.sx/e/y3iuwnqzzlr2";
        }
        else if(dayValue == "D8"){
            videoIframe.src = "https://filemoon.sx/e/600frazrx2j4";
        }
  
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            
            videoIframe.src = "https://ahvsh.com/e/opnkkc821w07";
        }
        else if(dayValue == "D2"){
            videoIframe.src = "https://ahvsh.com/e/j8dn0yl07xgf";
        }
        else if(dayValue == "D3"){
            videoIframe.src = "https://ahvsh.com/e/mzprybm6jg5a";
        }
        else if(dayValue == "D4"){
            videoIframe.src = "https://ahvsh.com/e/ltxadbgvqdsz";
        }
        else if(dayValue == "D5"){
            videoIframe.src = "https://ahvsh.com/e/liux87ss30tw";
        }
        else if(dayValue == "D5"){
            videoIframe.src = "https://ahvsh.com/e/liux87ss30tw";
        }
        else if(dayValue == "D6"){
            videoIframe.src = "https://ahvsh.com/e/erlj2k9291eq";
        }
        else if(dayValue == "D7"){
            videoIframe.src = "https://ahvsh.com/e/erlj2k9291eq";
        }
     
    }
    else
    {
        if(dayValue == "D1"){
            videoIframe.src = "https://sblona.com/e/rhselwxlc3o9";
        }
        else if(dayValue == "D2"){
            videoIframe.src = "https://sblona.com/e/xt80bc42hkwd";
        }
        else if(dayValue == "D3"){
            videoIframe.src = "https://likessb.com/e/ozq9re6ogr63";
        }
        else if(dayValue == "D4"){
            videoIframe.src = "https://likessb.com/e/qoi67ln5om3z";
        }
        else if(dayValue == "D5"){
            videoIframe.src = "https://likessb.com/e/9b9pef4hl5fv";
        }
        else if(dayValue == "D6"){
            videoIframe.src = "https://likessb.com/e/zcvp9iwtafqt";
        }
        else if(dayValue == "D7"){
            videoIframe.src = "https://likessb.com/e/zcvp9iwtafqt";
        }
        else if(dayValue == "D8"){
            videoIframe.src = "https://filemoon.sx/e/600frazrx2j4";
        }
    }

    
}
