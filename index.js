var express = require('express');
var mainMenu = require('./Node JS Controller/MainIndex');
var NavigationAddCourse = require('./Node JS Controller/AddCourse');
var NavigationSearchCourse = require('./Node JS Controller/SearchCourse');

var application = express();
application.set('view engine', 'ejs');
application.use('/LayoutScript', express.static("LayoutScript"));

mainMenu(application);
NavigationAddCourse(application);
NavigationSearchCourse(application);

application.listen(8000);
console.log("Now Serving at Port 8000");