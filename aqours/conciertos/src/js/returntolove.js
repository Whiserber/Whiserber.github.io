var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/k90uen4xz6gg/Guilty_Kiss_2nd_LoveLive!__Return_To_Love___Kiss_Kiss_Kiss__D_a_1_Parte_1";

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
                videoIframe.src = "https://guccihide.com/e/x8dgyqeapnxz";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/hkyycmp7cboa";
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
                videoIframe.src = "https://sbface.com/e/suae0qv5v34a.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/t85kvo7dhyvq.html";
            }
            /*else
            {
                videoIframe.src = "https://sbface.com/e/ete2hslbq53r.html";
            }*/
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
