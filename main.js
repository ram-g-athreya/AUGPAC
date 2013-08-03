$('document').ready(function(){
//Get 2nd row in table
var tr=$('tr').next();

//If bold gets changed then this must be modified
var headings=tr.find('b');
var count=0;


marks.setHeadings(headings);

$('tr').next().next().each(function(){
	count=0;
	$(this).find('center').each(function(){
		var text=$.trim($(this).html());
		if(count==marks.subject)marks.subjects.push(text);
		else if(count==marks.grade)marks.grades.push(text);
		else if(count==marks.result)marks.results.push(text);

	count++;
	});
});

marks.calculateGPA();
if(!marks.invalid()){
	marks.setValues();
	chrome.storage.sync.set({'iframe': true});
	$('body').append("<iframe src='" + chrome.extension.getURL('popup.html') + "' scrolling='yes'></iframe>");
	check();
}
});

//Function to check and remove the iframe
function check(){
	var close;
	chrome.storage.sync.get(function(object){
		close=object.close;
		if(typeof close=='undefined'){
			setTimeout(check, 500);
		}
		else {
			$('iframe').remove();
		}
	});
}