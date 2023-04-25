var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://guccihide.com/e/n7t6g0znfbrd";

serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    var dayValue = daySelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S1")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/n7t6g0znfbrd";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/sjl315b51ldr/_LLP_Kvoth3__Love_Live!__s_First_Live!_Parte_2";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "https://filemoon.sx/e/y275wmi43u0t/Muse_First_Live_Drama_1";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://filemoon.sx/e/nz3ulalfscx2/Muse_First_Live_Drama_2";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://filemoon.sx/e/14jlvwhzijo5/Muse_First_Live_Drama_3";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "https://filemoon.sx/e/0qke4tx3x0wy/Muse_First_Live_Drama_4";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/n7t6g0znfbrd";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/c57z6b26jb4n";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "https://guccihide.com/e/k0fgz4ej6l9l";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://guccihide.com/e/uckadtz0k94y";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://guccihide.com/e/67soaosmfv3u";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "https://guccihide.com/e/ctm8o9uoo24k";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/o3r5vg4ztlua";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/6yiwy3fq04xs";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "https://sbface.com/e/al55b0npinfw";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://sbface.com/e/r7pgmcsrvf4f";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://sbface.com/e/l6fap35do6cb";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "https://sbface.com/e/p128d2xk637a";
            }
        }
    }

    
}
