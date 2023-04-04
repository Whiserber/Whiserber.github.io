var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var DDEButton = document.getElementById('DDE');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/z9ky4nljrei0/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_2_Parte_1";

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
            else
            {
                videoIframe.src = "https://filemoon.sx/e/4jdyg83hddsa/Making_Of_Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Ocean_Stage___SubEsp_";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/z9ky4nljrei0/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/gj4p0k4bhk0f/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_2_Parte_2";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/4jdyg83hddsa/Making_Of_Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Ocean_Stage___SubEsp_";
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
            else
            {
                videoIframe.src = "";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
            else
            {
                videoIframe.src = "";
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
            else
            {
                videoIframe.src = "";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
            else
            {
                videoIframe.src = "";
            }
        }  
    }
    
}
