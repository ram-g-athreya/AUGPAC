var marks = {
    subject: 0,
    grade: 0,
    result: 0,
    subjects: Array(),
    grades: Array(),
    results: Array(),
    pass: 0,
    fail: 0,
    pass_list: Array(),
    fail_list: Array(),
    GPA: 0,
    total_credits: 0,
    gp: 0,
    failgrades: Array('U', 'WH1', 'WH2', 'WH3', 'WH4', 'WH5', 'WH6', 'WH7', 'WH8', 'SE', 'S.E', 'WD', 'AB', 'SA', 'AC'),
    passgrades: Array('E', 'D', 'C', 'B', 'A', 'S'),
    calculateGPA: function()
    {
        for (var i in this.subjects)
        {
            var response = subject.find(this.subjects[i]);
            if (response != null)
            {
                if ($.inArray(this.grades[i], this.failgrades) >= 0)
                {
                    this.fail++;
                    this.fail_list.push({'subject': this.subjects[i], 'text': response.text, 'grade': this.grades[i]});
                }
                else if ($.inArray(this.grades[i], this.passgrades) >= 0)
                {
                    var grade_point = $.inArray(this.grades[i], this.passgrades) + 5;
                    this.pass++;
                    this.pass_list.push({'subject': this.subjects[i], 'text': response.text, 'grade': this.grades[i]});
                    this.gp += response.credit * grade_point;
                    this.total_credits += parseInt(response.credit);
                }
            }
        }
        log('Subjects failed is ' + this.fail);
        log('Subjects passed is ' + this.pass);
        log('GP is ' + this.gp);
        log('Total Credits is ' + this.total_credits);
        this.GPA = this.gp / this.total_credits;
        log('GPA is ' + this.GPA);
    },
    invalid: function() {
        return this.fail === 0 && this.pass === 0 && isNaN(this.GPA);
    },
    setValues: function() {
        var me = this;
        var values = {
            gpa: me.GPA,
            pass: me.pass,
            fail: me.fail,
            gp: me.gp,
            totalCredits: me.total_credits,
            passList: me.pass_list,
            failList: me.fail_list
        };
        chrome.storage.sync.clear();
        chrome.storage.sync.set({'AUGPAC': values});
    }
};