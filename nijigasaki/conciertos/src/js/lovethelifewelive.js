var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/ygtpcp3yr9q6/_LLP__Nijigasaki_Gakuen_School_Idol_Doukoukai_4th_Live!__Love_the_Life_We_Live__D_a_2_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/ygtpcp3yr9q6/_LLP__Nijigasaki_Gakuen_School_Idol_Doukoukai_4th_Live!__Love_the_Life_We_Live__D_a_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/t0nl4z3z7yyf/_LLP__Nijigasaki_Gakuen_School_Idol_Doukoukai_4th_Live!__Love_the_Life_We_Live__D_a_2_Parte_2";
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
                videoIframe.src = "https://guccihide.com/e/qqdkhh4bkzx7";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/25s9xk8g0ua5";
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
                videoIframe.src = "https://sbface.com/e/yfzwm062zhii.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/6ws8awa2bli8.html";
            }
        }
    }

    
}
