var serverSelect = document.getElementById('select_server');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://guccihide.com/e/rc264ejn0k62";

serverSelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S2")
    {
        if(partValue == "P1"){
            videoIframe.src = "https://guccihide.com/e/rc264ejn0k62";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://guccihide.com/e/jpcwfmv6u25p";
        }
        else if(partValue == "D1"){
            videoIframe.src = "https://guccihide.com/e/swsk59zu2f3o";
        }
        else if(partValue == "D2"){
            videoIframe.src = "https://guccihide.com/e/x2n4oqgbxeqf";
        }
        else if(partValue == "D3"){
            videoIframe.src = "https://guccihide.com/e/4yf8f5qifsug";
        }
    }
    else
    {         
        if(partValue == "P1"){
            videoIframe.src = "https://sbface.com/e/283bjyu9s5wu";
        }
        else if(partValue == "P2")
        {
            videoIframe.src = "https://sbface.com/e/hxhhktmskxkx";
        }
        else if(partValue == "D1"){
            videoIframe.src = "https://sbface.com/e/m5cwxev081f9";
        }
        else if(partValue == "D2"){
            videoIframe.src = "https://sbface.com/e/vfyg44ic4zcj";
        }
        else if(partValue == "D3"){
            videoIframe.src = "https://sbface.com/e/20ncu97wycbb";
        }
    }
}
