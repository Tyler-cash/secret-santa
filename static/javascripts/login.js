$(document).ready(function () {
    $("#signup-form").bind('submit', function (e) {
        $.getJSON($SCRIPT_ROOT + '/AJAXsignup', {
            fName: $('input[name="fName"]').val(),
            lName: $('input[name="lName"]').val(),
            email: $('input[name="email"]').val(),
            pass: $('input[name="pass"]').val(),
            uselessPass: $('input[name="uselessPassword"]').val(),
            family: $('input[name="family"]').val()
        }, function (data) {
            $("#result").removeClass();
            if(!data.success){
                $("#result").addClass("card-panel #ff8a80 red accent-1");
            }else {
                $("#result").addClass("card-panel #b9f6ca green accent-1");
            }
            $("#result").html(data.outcome);
        });
        return false;
    });
});