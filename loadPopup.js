var data;
chrome.storage.sync.get(function(object) {
    data = object.AUGPAC;
    iframe = object.iframe;
    //console.log(iframe);
    $('document').ready(function() {
        if (typeof iframe == 'undefined') {
            $('#close').addClass('hide');
        }
    });
    //console.log(data);
    setData();
});

function setData() {
    $('document').ready(function() {
        var i = 0, html;
        $('div#gpa').html('Your GPA is ' + data.gpa);
        $('div#passnum').html('You passed in ' + data.pass + ' subjects');
        $('div#failnum').html('You failed in ' + data.fail + ' subjects');

        if (data.passList.length > 0) {
            html = setLists(data.passList, 'Subjects passed are: <br/>');
            $('div#passlist').html(html);
        }

        if (data.failList.length > 0) {
            html = setLists(data.failList, 'Subjects failed are: <br/>');
            $('div#faillist').html(html);
        }
    });
}

function setLists(list, html) {
    for (i in list) {
        html = html.concat('<span>' + list[i].subject + ' - ' + list[i].text + ' - ' + list[i].grade + '</span><br/>');
    }
    return html;
}

$('document').ready(function() {
    $('#close').click(function() {
        chrome.storage.sync.set({'close': true});
    });

    $('#calculate').click(function() {
        var gp = data.gp, total_credits = data.totalCredits;
        var cgpa = $('#cgpa').val();

        if (isNaN(cgpa) || !cgpa) {
            $('#result').html('Please enter a proper CGPA value');
        }
        else {
            var credit = $('#credit').val();
            if (isNaN(credit) || !credit) {
                $('#result').html('Please enter a proper credit value');
            }
            else {
                cgpa *= credit;
                cgpa = parseInt(gp) + parseInt(cgpa);
                credit = parseInt(total_credits) + parseInt(credit);
                var result = cgpa / credit;
                $('#result').html('Your CGPA is ' + result.toFixed(3));
            }
        }
    });
});