
//Common ajax request wrapper
function ajaxRequest(url, type, data, callback, failure) {
    $.ajax({
        type: type,
        url: baseURL + url,
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: "jsonp",
        success: function(response) {
            if (isDefined(callback)) {
                callback(response);
            }
        },
        failure: function(response) {
            if (isDefined(failure)) {
                failure(response);
            }
        }
    });
}

//Checking if an object is defined
function isDefined(object) {
    return typeof object !== 'undefined';
}

function log(msg) {
    if (IS_DEBUG) {
        console.log(msg);
    }
}
