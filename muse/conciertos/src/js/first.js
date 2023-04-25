var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "";

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
                videoIframe.src = "";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "";
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
                videoIframe.src = "https://guccihide.com/e/";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "https://guccihide.com/e/";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://guccihide.com/e/";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://guccihide.com/e/";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "https://guccihide.com/e/";
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
                videoIframe.src = "https://sbface.com/e/";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/";
            }
            else if (partValue == "D1")
            {
                videoIframe.src = "https://sbface.com/e/";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://sbface.com/e/";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://sbface.com/e/";
            }
            else if(partValue == "D4")
            {
                videoIframe.src = "https://sbface.com/e/";
            }
        }
    }

    
}
