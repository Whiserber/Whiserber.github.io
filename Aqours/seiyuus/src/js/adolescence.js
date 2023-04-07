var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/c872q95u6nf6/Aika_Kobayashi_Birthday_Report__SubEsp_";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        videoIframe.src = "https://filemoon.sx/e/wha65hf0gmq6/Aida_Rikako__Adolescence_";

    }
    else if(serverValue == "S2")
    {
        videoIframe.src = "https://guccihide.com/e/f30wrucg3ede";
    }
    else
    {
        videoIframe.src = "https://sbface.com/e/jkhvjlwh4r84";
    }
    
}
