
$(document).ready(function () {

    alert("hi");
    $("#btn_login").on('click', function () {

        document.location = "register/index.html";

    });

    $.ajax({
        type: 'GET',
        url: 'localhost/nutricare/users.php',
        success: function (data) {
            console.log(data + " X");
        }



    });
    console.log("Y");



    $.getJSON('C:/Users/jkps/Documents/GitHub/nutricare.github.io/nutricare/users.php', function (data) {
        console.log(data);
     console.log("y");
     });

});


$(document).ready(function () {


});

