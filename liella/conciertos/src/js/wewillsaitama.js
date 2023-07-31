var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://ahvsh.com/e/6ktd626p70rf";//https://filemoon.sx/e/282qcs7w3qlw



serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    var dayValue = daySelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S1")
    {
        if(dayValue == "D2"){
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/282qcs7w3qlw";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/e7p0s0fs81g5";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/dexpq87chewn";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/ngxfp05m8b5x";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D2"){
            if(partValue == "P1"){
                
                videoIframe.src = "https://ahvsh.com/e/adf73vo8ejok";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://ahvsh.com/e/zq2pxmxwd0fn";
            }

        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://ahvsh.com/e/6ktd626p70rf";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://ahvsh.com/e/v3onehqxw9u2";
            }
        }
    }
    else
    {
        if(dayValue == "D2"){
            if(partValue == "P1"){
                videoIframe.src = "https://sblona.com/e/55xwmp0hylsp";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sblona.com/e/v3boe1gxocf0";
            }

        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://likessb.com/e/ilwkadvjm04v";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://likessb.com/e/qhph3tk2iwfj";
            }
        }
    }

    
}
