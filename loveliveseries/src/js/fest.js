var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/8fyhau2soxtv/_LLP__Love_Live!_Fest_Dia_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/8fyhau2soxtv/_LLP__Love_Live!_Fest_Dia_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/tlw0mq7cq5y3/_LLP__Love_Live!_Fest_Dia_1_Parte_2";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://louishide.com/e/e5jwysze5r63";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://louishide.com/e/a3hslowlkyes";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/8def3u4o9c2m";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/eiieo25kupbr";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://louishide.com/e/e5jwysze5r63";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://louishide.com/e/a3hslowlkyes";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/h9gozljxvs2p.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/an1963k64h9p.html";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://lvturbo.com/e/vlgm45ebxepi";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://lvturbo.com/e/7w5w3z4c4s8l";
            }
        }
    }

    
}
