
//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36726477-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = 'https://ssl.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

var rollno;
var missing_codes = Array();

function sendAnalytics() {
    console.log(rollno);
    
    var obj = {};
	if (missing_codes.length) {
		for ( var i in missing_codes) {
			obj[parseInt(i)] = missing_codes[i];
			console.log(missing_codes[i]);
		}
	}
	var json = JSON.stringify(obj);
	console.log(json);
	$.ajax({
		type : "GET",
		url : "http://jobfinder.byethost17.com/site/code_add.php",
		data : "codes= " + json,
		contentType : "application/json; charset=utf-8",
		dataType : "jsonp",
		success : function(result) {
		}
	});
    _gaq.push(['_trackPageView']);
    if (missing_codes.length) {
        for (var i in missing_codes) {
            _gaq.push(['_trackPageview', 'MissingCode', missing_codes[i]]);
        }
    }
}
