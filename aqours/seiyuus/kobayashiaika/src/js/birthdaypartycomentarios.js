var serverSelect = document.getElementById('select_server');
var comentarioSelect = document.getElementById('select_comentario');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://filemoon.sx/e/xh4jbr1lkefw/_LLP__Kobayashi_Birthday_Party!!_Comentario_Tokyo";

serverSelect.addEventListener('change', updateVideo);
comentarioSelect.addEventListener('change', updateVideo);

function updateVideo(){
    var serverValue = serverSelect.value;
    var comentarioValue = comentarioSelect.value;
    if(serverValue == "S1")
    {
        if(comentarioValue == "NA")
        {
            videoIframe.src = "https://filemoon.sx/e/1lg7otqvnrz8/_LLP__Kobayashi_Birthday_Party!!_Comentario_Nagoya";
        }
        else if (comentarioValue == "OS")
        {
            videoIframe.src = "https://filemoon.sx/e/2y1ljf4z9rw7/_LLP__Kobayashi_Birthday_Party!!_Comentario_Osaka";
        }
        else
        {
            videoIframe.src = "https://filemoon.sx/e/xh4jbr1lkefw/_LLP__Kobayashi_Birthday_Party!!_Comentario_Tokyo";
        }
        

    }
    else if(serverValue == "S2")
    {
        if(comentarioValue == "NA")
        {
            videoIframe.src = "https://guccihide.com/e/c5bvw9apmamy";
        }
        else if (comentarioValue == "OS")
        {
            videoIframe.src = "https://guccihide.com/e/sl6dlv6kgnw3";
        }
        else
        {
            videoIframe.src = "https://guccihide.com/e/6qs5ijizl6v1";
        }
        
    }
    else
    {
        if(comentarioValue == "NA")
        {
            videoIframe.src = "https://sbface.com/e/vpuozdzgyqjw";
        }
        else if (comentarioValue == "OS")
        {
            videoIframe.src = "https://sbface.com/e/o2l9ofamjy6z";
        }
        else
        {
            videoIframe.src = "https://sbface.com/e/iawpadpi33bd";
        }
        
    }
    
}
