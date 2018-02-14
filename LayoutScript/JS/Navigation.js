/*Page navigation to add course or search course to below views .ejs file respectively */
$(document).ready(function(){
$("#InsertCourse").click(function(){

    window.location.href ="/Insert";
});
$("#SearchCourse").click(function(){

    window.location.href ="/Search";
});

});