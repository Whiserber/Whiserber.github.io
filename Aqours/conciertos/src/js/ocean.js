var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/acexd9ne6dp8/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/acexd9ne6dp8/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/xx0qzhnj1x13/Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE__D_a_1_Parte_2";
            }
            else
            {
                videoIframe.src = "https://filemoon.sx/e/p46p8owollvq/Making_of_Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE_SubESP";
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
                videoIframe.src = "https://filemoon.sx/e/p46p8owollvq/Making_of_Aqours_6th_LoveLive!__KU-RU-KU-RU_Rock__n__Roll_TOUR___OCEAN_STAGE_SubESP";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/vot7xvp6d0zq";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/ouwg76xmo8za";
            }
            else
            {
                videoIframe.src = "https://guccihide.com/e/ulmean2rkie4";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/c3ckz601qw3s";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/cc2n5qfzzwjq";
            }
            else
            {
                videoIframe.src = "https://guccihide.com/e/ulmean2rkie4";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/w8qem9nce20r.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/r2rmh77ib5ga.html";
            }
            else
            {
                videoIframe.src = "https://sbface.com/e/dt9vkmkzojn2.html";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/svr22sz8xci2.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/vw1vjjhx93w0.html";
            }
            else
            {
                videoIframe.src = "https://sbface.com/e/dt9vkmkzojn2.html";
            }
        }  
    }
    
}
