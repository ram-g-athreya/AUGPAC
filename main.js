
$('document').ready(function() {
    //All marks are within the strong tag
    $('strong').each(function() {
        var text = $(this).text();

        //Pushing subject codes
        if (/^[a-z][a-z][0-9]+/i.test(text)) {
            marks.subjects.push(text);
        }
        //Pushing grades
        else if (/^[a-z][.]?[a-z0-9]?$/i.test(text)) {
            marks.grades.push(text);
        }
        else if (text == parseInt(text)) {
            rollno = text;
        }
    });

    log("subjects are " + marks.subjects);
    log("grades are " + marks.grades);

    marks.calculateGPA();
    if (!marks.invalid()) {
        marks.setValues();
        chrome.storage.sync.set({'iframe': true});
        $('body').append("<iframe src='" + chrome.extension.getURL('popup.html') + "' scrolling='yes'></iframe>");
        check();
    }
    sendAnalytics();
});

//Function to check and remove the iframe
function check() {
    var close;
    chrome.storage.sync.get(function(object) {
        close = object.close;
        if (!isDefined(close)) {
            setTimeout(check, 500);
        }
        else {
            $('iframe').remove();
        }
    });
}