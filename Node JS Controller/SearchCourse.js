var SearchCourseController = require('./Connection');

var bodyParser = require('body-parser');

var urlEncodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(application) {
    application.get('/Search', function(request, response) {
        response.render('Search', {data: {show: false, resultsFound: false}});
    });

    application.post('/Search', urlEncodedParser, function(request, response) {
        console.log(request.body.Course_Number);
        SearchCourseController.retreiveCourseData(request.body.Course_Number, function(results) {
            if (results !== null && Object.keys(results).length !== 0) {
                response.render('Search', { data: { show: true, resultsFound: true, IncomingFormData: results[0] }});
                console.log("Success!");
            }
            else {
                response.render('Search', {data: {show: true, resultsFound: false}});
            }
        });
    });
};