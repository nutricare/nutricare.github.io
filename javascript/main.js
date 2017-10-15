
$(document).ready(function () {

    // alert("hi");
    $("#btn_login").on('click', function () {

        document.location = "register/index.html";

    });

    $.ajax({
        type: 'GET',
        url: 'users.php',
        success: function (data) {
            console.log(data + " X");
        }



    });
    console.log("Y");



    $.getJSON('users.php', function (data) {
        // console.log(data);
        var p = document.getElementById("phpelement");
        
        $.each(data, function(i, item) {
            // alert(item.PageName);
            p.innerHTML += "<div class='button is-success'>" + item.username + " " + i + " " + " </div>";
            
        });
        
        // p.innerText = "JHI";
        console.log(p);
     });



});


$(document).ready(function () {


});

