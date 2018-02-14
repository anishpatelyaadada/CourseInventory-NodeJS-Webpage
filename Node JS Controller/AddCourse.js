var addCourseController = require('./Connection');

bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(application) {
    application.get('/Insert', function(request, response) {
        response.render('Insert');
    });

    application.post('/Insert', urlEncodedParser, function(request, response) {
        var IncomingFormData = [request.body.Course_Number, request.body.Course_Title, request.body.Credit_Hours];
        var DBFormDataValNames = ['Course_Number', 'Course_Title', 'Credit_Hours'];
        addCourseController.insertDataGen('course', DBFormDataValNames, IncomingFormData, function() {
            console.log("Success!");
        });
        console.log(IncomingFormData);
    });
};