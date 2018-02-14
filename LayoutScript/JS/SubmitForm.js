/*save the data of Insert.ejs file in the variable by including this file inside the head tag of the file*/
$(document).ready(function() {
    $("#SUBMIT_FORM").submit(function() {
        var C_Number = $("#Course_Number").val();
        var C_Title = $("#Course_Title").val();
        var C_Hours = $("#Credit_Hours").val();
        
        $.post('/Insert', {
            Course_Number: C_Number,
            Course_Title: C_Title,
            Credit_Hours: C_Hours
        },
        function(data, status) {
            window.alert("Data: " + data + "\nStatus: " + status);
        });
    });
});