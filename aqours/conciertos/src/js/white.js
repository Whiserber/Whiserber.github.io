var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/lkt5tolqwwsu/_LLP_LLES_Aqours_EXTRA_LoveLive!_2023__It_s_a_Mugendai_WORLD__White_Day_Concert_D_a_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/lkt5tolqwwsu/_LLP_LLES_Aqours_EXTRA_LoveLive!_2023__It_s_a_Mugendai_WORLD__White_Day_Concert_D_a_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/sczad29yefvk/_LLP_LLES_Aqours_EXTRA_LoveLive!_2023__It_s_a_Mugendai_WORLD__White_Day_Concert_D_a_1_Parte_2";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/vu1jhgei952o/_LLP_LLESP_Aqours_EXTRA_LoveLive!_2023__It_s_a_Mugendai_WORLD__White_Day_Concert_D_a_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/dzpeygpjep6z/_LLP_LLESP_Aqours_EXTRA_LoveLive!_2023__It_s_a_Mugendai_WORLD__White_Day_Concert_D_a_2_Parte_2";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://ahvsh.com/e/kz5oro3a99qp";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://ahvsh.com/e/lbbhr4bmozex";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://ahvsh.com/e/ef0me72sz122";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://ahvsh.com/e/qw8e4ducneim";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbrapid.com/e/g9onf742xr19";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbrapid.com/e/3f9wklfqi36e";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://sbrapid.com/e/o4mhaabicjou";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbrapid.com/e/dk5ekut6thka";
            }
        }  
    }
    
}
