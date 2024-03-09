var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/zie5yli8ohms";

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
                videoIframe.src = "https://filemoon.sx/e/k90uen4xz6gg/Guilty_Kiss_2nd_LoveLive!__Return_To_Love___Kiss_Kiss_Kiss__D_a_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/e3sloz7ial2e/Guilty_Kiss_2nd_LoveLive!__Return_To_Love___Kiss_Kiss_Kiss__D_a_1_Parte_2";
            }
        }
        else
        {
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/zie5yli8ohms";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/y8vnddt3nfoo";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/pslgvnfblfk2";
            }
        }
    }
    else 
    {
        if(dayValue == "D2"){
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/bl6g6ocu10fd";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/qwwco16bf3re";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/hzgox4e12z42";
            }
        }
    }
}
