var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/6klo78jselhu/Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage__Dia_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/6klo78jselhu/Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage__Dia_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/tyr8jn93i2sq/Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage__Dia_1_Parte_2";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/umgvlyu82v7w/Making_of_Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage_";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/g2jjp5d7jzs5/Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage__Dia_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/t4tl8ihhac02/Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage__Dia_2_Parte_2";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/umgvlyu82v7w/Making_of_Aqours_6th_Lovelive!__Ku-Ru-Ku-Ru_Rock__N__Roll_Tour___Windy_Stage_";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/5jtuska6kvqu";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/xl8e80pgoofz";
            }
            else
            {
                videoIframe.src = "https://guccihide.com/e/xoz5vcshopip";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/b6ejrrxvjldv";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/crv060qsaei0";
            }
            else
            {
                videoIframe.src = "https://guccihide.com/e/xoz5vcshopip";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/nwkmwyvf9ka6.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/ndusf26yc6km.html";
            }
            else
            {
                videoIframe.src = "https://sbface.com/e/ete2hslbq53r.html";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/hlkpylrylny1.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/ndap8lrakj3b.html";
            }
            else
            {
                videoIframe.src = "https://sbface.com/e/ete2hslbq53r.html";
            }
        }
    }

    
}
