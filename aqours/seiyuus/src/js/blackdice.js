var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/womys8hrqc4j/_blubsubs__Black_Dice_sub_espa_ol_full";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/womys8hrqc4j/_blubsubs__Black_Dice_sub_espa_ol_full";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/mp33m2mku6z9";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/lfveq2vf9l6z";
    }
    
}
