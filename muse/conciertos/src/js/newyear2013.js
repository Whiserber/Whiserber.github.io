//var serverSelect = document.getElementById('select_server');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');
var source = document.getElementById('ll_test')
//videoIframe.src = "https://filemoon.sx/e/1bc97s007m38/_LLP_Kvoth3___s_New_Year_LoveLive!_2013_Parte_1";

//serverSelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);


function updateVideo(){
    //var serverValue = serverSelect.value;
    var partValue = partSelect.value;

    if(partValue == "P1")
    {
        
        source.setAttribute('src', 'http://2.56.10.141:3030/streamable/MuseNewYearLoveLive2013Parte1.mp4');
    }
    else if (partValue == "P2")
    {
        source.setAttribute('src', 'http://2.56.10.141:3030/streamable/MuseNewYearLoveLive2013Parte2.mp4');
    }
    else
    {
        source.setAttribute('src', 'http://2.56.10.141:3030/streamable/MuseNewYearLoveLive2013Parte3.mp4');
    }

    /*
    if(serverValue == "S1")
    {
        if(partValue == "P1"){
            videoIframe.src = "https://filemoon.sx/e/1bc97s007m38/_LLP_Kvoth3___s_New_Year_LoveLive!_2013_Parte_1";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://filemoon.sx/e/wjj2uify8cxr/_LLP_Kvoth3___s_New_Year_LoveLive!_2013_Parte_2";
        }
        else {
            videoIframe.src = "https://filemoon.sx/e/2yhpjspqkq87/_LLP_Kvoth3___s_New_Year_LoveLive!_2013_Parte_3";
        }

    }
    else if(serverValue == "S2")
    {
        
        if(partValue == "P1"){
            videoIframe.src = "https://guccihide.com/e/za6s33hqndeh";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://guccihide.com/e/yojvp0370uv6";
        }
        else {
            videoIframe.src = "https://guccihide.com/e/a5ctazio5v3m";
        }
        
    }
    else
    {
        if(partValue == "P1"){
            videoIframe.src = "https://sbface.com/e/0rr0bf1fr469";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://sbface.com/e/am1fwpqtf26s";
        }
        else {
            videoIframe.src = "https://sbface.com/e/1e02w3mqcdru";
        }
        
    }*/

    
}
