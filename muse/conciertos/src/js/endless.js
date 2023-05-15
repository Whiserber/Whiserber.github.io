var serverSelect = document.getElementById('select_server');
var daySelect = document.getElementById('select_day');
var partSelect = document.getElementById('select_part');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://guccihide.com/e/r0tsxus4e1qv";

serverSelect.addEventListener('change', updateVideo);
daySelect.addEventListener('change', updateVideo);
partSelect.addEventListener('change', updateVideo);

function updateSelectPart() {
    var selectDay = document.getElementById("select_day");
    var selectPart = document.getElementById("select_part");
    
    if (selectDay.value == "D1") {
      selectPart.innerHTML = `
        <option value="P1">Parte 1</option>
        <option value="P2">Parte 2</option>
        <option value="P3">Parte 3</option>
        <option value="D1">Drama 1</option>
        <option value="D2">Drama 2</option>
        <option value="D3">Drama 3</option>
      `;
    } else if (selectDay.value == "D2") {
      selectPart.innerHTML = `
        <option value="P1">Parte 1</option>
        <option value="P2">Parte 2</option>
        <option value="D1">Drama 1</option>
        <option value="D2">Drama 2</option>
        <option value="D3">Drama 3</option>
      `;
    }
  }


function updateVideo(){
    var serverValue = serverSelect.value;
    var dayValue = daySelect.value;
    var partValue = partSelect.value;
    if(serverValue == "S2")
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/r0tsxus4e1qv";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/d6hwsy72y70p";
            }
            else if(partValue == "P3")
            {
                videoIframe.src = "https://guccihide.com/e/e7njtwn4fvyy";
            }
            else if(partValue == "D1")
            {
                videoIframe.src = "https://guccihide.com/e/2fh8wz0tefep";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://guccihide.com/e/i3pd9vf4qq7d";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://guccihide.com/e/6grzg1ejctx2";
            }
        }
        else
        {
            
            if(partValue == "P1"){
                videoIframe.src = "https://guccihide.com/e/vdb5re38lfr0";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://guccihide.com/e/3g90di77rp2n";
            }
            else if(partValue == "D1")
            {
                videoIframe.src = "https://guccihide.com/e/2fh8wz0tefep";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://guccihide.com/e/i3pd9vf4qq7d";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://guccihide.com/e/6grzg1ejctx2";
            }
        }
    }
    else
    {
        if(dayValue == "D1"){
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/j393hmsndfel";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/e0ls8s857bpf";
            }
            else if(partValue == "P3")
            {
                videoIframe.src = "https://sbface.com/e/z3w5nnz7hjcm";
            }
            else if(partValue == "D1")
            {
                videoIframe.src = "https://sbface.com/e/2uxyvz3ptrzq";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://sbface.com/e/8m6gcioxy27j";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://sbface.com/e/w3kdyp51tq2l";
            }
        }
        else
        {
            if(partValue == "P1"){
                videoIframe.src = "https://sbface.com/e/koyelr9q6z3n";
            }
            else if(partValue == "P2")
            {
                videoIframe.src = "https://sbface.com/e/73h2yy4y23rc";
            }
            else if(partValue == "D1")
            {
                videoIframe.src = "https://sbface.com/e/2uxyvz3ptrzq";
            }
            else if(partValue == "D2")
            {
                videoIframe.src = "https://sbface.com/e/8m6gcioxy27j";
            }
            else if(partValue == "D3")
            {
                videoIframe.src = "https://sbface.com/e/w3kdyp51tq2l";
            }
        }
    }

    
}
