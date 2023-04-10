var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/1rojggquks67/Liella!_3rd_LoveLive!_Tour__WE_WILL!!__D_a_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/1rojggquks67/Liella!_3rd_LoveLive!_Tour__WE_WILL!!__D_a_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/x004yut8zt05/Liella!_3rd_LoveLive!_Tour__WE_WILL!!__D_a_1_Parte_2";
            }
        }
        /*else
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
        }*/
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/71xt2s9u0i54";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/hclw57metl2t";
            }

        }
        /*else
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
        }*/
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/azu11riv5edt.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/qv328u9byxpi.html";
            }

        }
        /*else
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
        }*/
    }

    
}
