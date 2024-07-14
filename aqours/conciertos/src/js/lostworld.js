var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/cyqsa1zeokzp";

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
            videoIframe.src = "https://filemoon.sx/e/cyqsa1zeokzp";
        }
        else if(dayValue == "DDE"){
            videoIframe.src = "https://filemoon.sx/e/nl1nzjk0kucr";
        }
    }
}
