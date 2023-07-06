//var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
//var videoIframe = document.getElementById('video_iframe');
var source = document.getElementById('ll_test')
//videoIframe.src = "https://filemoon.sx/e/c9j5wzfi6l1v/_LLP__Aqours_5th_LoveLive!__Next_SPARKLING!!__D_a_2_Parte_1";

//serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);


function updateVideo(){
    //var serverValue = serverSelect.value;
    var dayValue = daySelect.value;
    var partValue = partSelect.value;

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
            source.setAttribute('src', 'https://streaming.llposting.com/streamable/Aqours5thLoveLiveNextSPARKLINGDia2Parte1.mp4');
            //videoIframe.src = "https://filemoon.sx/e/c9j5wzfi6l1v/_LLP__Aqours_5th_LoveLive!__Next_SPARKLING!!__D_a_2_Parte_1";
        }
        else if(partValue == "P2")
        {
            source.setAttribute('src', 'https://streaming.llposting.com/streamable/Aqours5thLoveLiveNextSPARKLINGDia2Parte2.mp4');
            //videoIframe.src = "https://filemoon.sx/e/h08tx8ni7l9k/_LLP__Aqours_5th_LoveLive!__Next_SPARKLING!!__D_a_2_Parte_2";
        }
    }
    


    /*if(serverValue == "S1")
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
                videoIframe.src = "https://filemoon.sx/e/c9j5wzfi6l1v/_LLP__Aqours_5th_LoveLive!__Next_SPARKLING!!__D_a_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/h08tx8ni7l9k/_LLP__Aqours_5th_LoveLive!__Next_SPARKLING!!__D_a_2_Parte_2";
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
                videoIframe.src = "https://guccihide.com/e/dplh69hpa4ax";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/g87rjx2u1jna";
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
                videoIframe.src = "https://sbface.com/e/98vetlyyqjsb.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/ipwivcurm3y3.html";
            }
        }
    }*/

    
}
