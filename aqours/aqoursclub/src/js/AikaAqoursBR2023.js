var serverSelect = document.getElementById('select_server');
var source = document.getElementById('ll_test')
serverSelect.addEventListener('change', updateVideo);

function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S1")
    {
        source.setAttribute('src', 'https://streaming.llposting.com/streamable/AqoursClub2023KobayashiAikaBirthdayReport.mp4');
    }
    else if(serverValue == "S2")
    {
        source.setAttribute('src', 'https://streaming.llposting.com/streamable/AqoursClub2023KobayashiAikaBirthdayReportEnglish.mp4');
    }

    
}

