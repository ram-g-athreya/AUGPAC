var marks={
	subject: 0,
	grade: 0,
	result: 0,

	subjects: Array(),
	grades: Array(),
	results: Array(),
	
	setHeadings: function(headings)
	{
		var count=0, _this=this;
		headings.each(function(){
			var string=String($(this).html());
			string=string.toLowerCase();

			if(string=='subject' || string=='subject code' || string=='subject_code')
				_this.subject=count;
			else if(string=='grade')
				_this.grade=count;
			else if(string=='result')
				_this.result=count;
			count++;
		});
	},

	pass: 0,
	fail: 0,

	pass_list: Array(),
	fail_list: Array(),


	GPA: 0,
	total_credits: 0,
	gp: 0,
	
	failgrades: Array('U', 'WH1', 'WH2','WH3','WH4','WH5','WH6', 'WH7', 'WH8', 'SE', 'S.E', 'WD', 'AB', 'SA', 'AC'),
	passgrades: Array('E', 'D', 'C', 'B', 'A', 'S'),

	calculateGPA: function()
	{
		var i=0;
		for(i in this.subjects)
		{
			var response=subject.find(this.subjects[i]);
			console.log(response);
			if(response!=null)
			{
				if($.inArray(this.grades[i], this.failgrades)>=0)
				{
					this.fail++;
					this.fail_list.push({'subject': this.subjects[i], 'text': response.text, 'grade': this.grades[i]});
				}
				else if($.inArray(this.grades[i], this.passgrades)>=0)
				{
					var grade_point=$.inArray(this.grades[i], this.passgrades) + 5;
					this.pass++;
					this.pass_list.push({'subject': this.subjects[i], 'text': response.text, 'grade': this.grades[i]});
					this.gp+=response.credit*grade_point;
					this.total_credits+=parseInt(response.credit);
				}
			}
		}
		console.log('Subjects failed is ' + this.fail);
		console.log('Subjects passed is ' + this.pass);
		console.log('GP is ' + this.gp);
		console.log('Total Credits is ' + this.total_credits);
		this.GPA=this.gp/this.total_credits;
		console.log('GPA is ' + this.GPA);
	},
	
	invalid: function(){
		return this.fail==0 && this.pass==0 && isNaN(this.GPA);
	},

	setValues: function(){
		var _this=this;
		var values={
			gpa: _this.GPA,
			pass: _this.pass,
			fail: _this.fail,
			gp: _this.gp,
			totalCredits: _this.total_credits,
			passList: _this.pass_list,
			failList: _this.fail_list
		};
		chrome.storage.sync.clear();
		chrome.storage.sync.set({'AUGPAC': values});
	}
};