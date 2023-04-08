var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/rf1z7fxopfom/Aqours_EXTRA_LoveLive!_2023__It_s_a__WORLD__Valentine_s_Day_D_a_1_Parte_1";

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
                videoIframe.src = "https://filemoon.sx/e/rf1z7fxopfom/Aqours_EXTRA_LoveLive!_2023__It_s_a__WORLD__Valentine_s_Day_D_a_1_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/vz5oal9z3nwv/Aqours_EXTRA_LoveLive!_2023__It_s_a__WORLD__Valentine_s_Day_D_a_1_Parte_2";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://filemoon.sx/e/leedgvzd6wlz/Aqours_EXTRA_LoveLive!_2023__It_s_a__WORLD__Valentine_s_Day_D_a_2_Parte_1";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://filemoon.sx/e/i37cg0413iy2/Aqours_EXTRA_LoveLive!_2023__It_s_a__WORLD__Valentine_s_Day_D_a_2_Parte_2";
            }
        }
    }
    else if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/o2mrt6bzr8gk";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/q1e39rk6fnav";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/9ltmi1gr7w2v";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/ekx00jmulk3t";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/i9o4ba5zxoin.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/yqv1vnpuk1du.html";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/bfowsxdzjqyo.html";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/62y066x91119.html";
            }
        }  
    }
    
}
