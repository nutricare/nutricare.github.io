// ------------------------------------------------------------- 

var myJ = {};

function getFood() {


    $.getJSON('../php/get_exercises.php', function (data) {
        // console.log(data);
        var p = document.getElementById("food_item_list");
        p.innerHTML = "";
        var s = "<option value='' disabled selected>Select a food item</option>";
        myJSON = data;
        $.each(data, function (i, item) {
            s += "<option>" + item.Exercise + " </option>";
        });
        p.innerHTML = s;
        console.log(p);

    });


}

// $(document).ready(function () {

function getTEST() {
    console.log("getTEST called");
    var p = $("#food_item_list").val();
    var c = $("#Calories");
    
    $.getJSON('../php/get_exercises.php', function (data) {
        myJ = data;
    });

    console.log(p);
    //
    for (x in myJ) {
        // alert("a");
        console.log(x.Exercise + " -x-x- ");
        // c.innerHTML = myJ[i].Calories;
    }


    setTimeout(function() {
        myJ.forEach(function(element) {
            // console.log(element);
            if(element["Exercise"] == p){
                console.log("_________________________________________________");
                console.log(element.Exercise + "- - - - - - - - - - - ");
                console.log(element.Category  + "- - - - - - - - - - - ");
                console.log(element.Real_Calorie_Burned_ph  + "- - - - - - - - - - - ");
                var cal = parseFloat(element.Real_Calorie_Burned_ph);
                cal = cal.toFixed(2);
                // element.Real_Calorie_Burned_ph.tofixed(2);
                $("#Calories").val(cal);
            }
        });
    }, 250);


}

function calcSetCalories(obj , quant){
    var foodData = obj;
    var p = $("#food_item_list").val();
    var c = $("#Calories");

    foodData.forEach(function(element) {
            // console.log(element);
            if(element["Exercise"] == p){
               
                var cal = parseFloat(element.Real_Calorie_Burned_ph);
                cal *= quant;
                cal = cal.toFixed(2);
                // element.Real_Calorie_Burned_ph.tofixed(2);
                $("#Calories").val(cal);
            }
        })


}


// });

$(function () {
    $('.add').on('click',function(){
        var $qty=$("#Quantity");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
        calcSetCalories(myJ , currentVal + 1);
    });
    $('.minus').on('click',function(){
        var $qty=$("#Quantity");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
        calcSetCalories(myJ , currentVal - 1);
    });
});

$(document).ready(function () {

    $("#submit_reg").on('click', function () {
        // var uname = document.getElementById("username_field").innerHTML;
        // var upwd = document.getElementById("password_field").innerHTML;
        alert("HI");
        var Username = $("#Username").val();
        var fname = $("#First_Name").val();
        var lname = $("#Last_Name").val();
        var height = $("#Height").val();
        var weight = $("#initial_weight").val();
        var goal = $("#Goal").val();
        var goal_weight = $("#Goal_Amount").val();
        var address = $("#Address").val();
        var pwd = $("#password").val();
        var ini_bmi = 10;

        // console.log((uname);
        // console.log((upwd);

        // console.log(("calling login");

        $.post("../php/register_user.php", {
            'Username': Username,
            'fname': fname,
            'lname': lname,
            'height': height,
            'weight': weight,
            'goal': goal,
            'goal_weight': goal_weight,
            'address': address,
            'pwd': pwd,
            'ini_bmi': 31.00
        }
            ,
            function (data, textStatus, jqXHR) {
                // console.log(("Login successful");
                // console.log((textStatus); 
                var str1 = jQuery.trim(data);
                console.log(data);
                console.log(str1);

                processRegister(str1);
            }

            // , "dataType"
        );


    });




    // alert("hi");// removed
    $("#btn_register").on('click', function () {

        document.location = "register/index.html";

    });

    $("#showexercises_1").on('click', function () {
        // add
        alert("HI");
        $.getJSON('../php/get_exercises.php', function (data) {
            // console.log(data);
            var p = document.getElementById("phpelement");
            p.innerHTML = "";
            var s = "<select id='Goal'>";
            $.each(data, function (i, item) {
                // alert(item.PageName);
                // p.innerHTML += "<div><div class='button is-success pad10 border'>" + item.Exercise + " " + i + " " + " </div></div>";
                //

                s += "<option>" + item.Exercise + " </option>";

                // c


            });
            s += "</select>";
            p.innerHTML = s;
            // p.innerText = "JHI"; a
            console.log(p);
        });
    });

    $("#btn_showusers").on('click', function () {

        $.getJSON('php/get_users.php', function (data) {
            // console.log(data);
            var p = document.getElementById("phpelement");
            p.innerHTML = "";

            $.each(data, function (i, item) {
                // alert(item.PageName);
                p.innerHTML += "<div><div class='button is-success pad10 border'>" + item.username + " " + i + " " + " </div></div>";

            });

            // p.innerText = "JHI"; a
            console.log(p);
        });
    });

    $("#btn_login").on('click', function () {
        // var uname = document.getElementById("username_field").innerHTML;
        // var upwd = document.getElementById("password_field").innerHTML;
        var uname = $("#username_field").val();
        var upwd = $("#password_field").val();

        // console.log((uname);
        // console.log((upwd);

        // console.log(("calling login");

        $.post("php/validate_user.php", {
            'username': uname,
            'password': upwd
        }
            ,
            function (data, textStatus, jqXHR) {
                // console.log(("Login successful");
                // console.log((textStatus); 
                var str1 = jQuery.trim(data);
                console.log(str1 === "success");
                processLogin(str1);
            }

            // , "dataType"
        );


    });


    $("#btn_continue").on('click', function () {
        // var uname = document.getElementById("username_field").innerHTML;
        // var upwd = document.getElementById("password_field").innerHTML;
        var Current_Weight = $("#Current_Weight").val();
        var user = sessionStorage["username"];
        var date = new Date();
        var Current_BMI = 21.00;
        alert(date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        alert(year);
        alert(month);
        alert(day);


        var full_date = year + "-" + month + "-" + day;
        alert(full_date);
        // console.log((uname);
        // console.log((upwd);

        // console.log(("calling login");

        $.post("php/add_userlog.php", {
            'Current_Weight': Current_Weight,
            'user': user,
            'full_date': full_date,
            'Current_BMI': Current_BMI
        }
            ,
            function (data, textStatus, jqXHR) {
                // console.log(("Login successful");
                // console.log((textStatus); 
                var str1 = jQuery.trim(data);
                console.log(str1 === "success");
                processLog(str1);
            }

            // , "dataType"
        );

        $.post("php/get_users_log.php", {
            'username': user
        }
            ,
            function (data, textStatus, jqXHR) {
                // console.log(("Login successful");
                // console.log((textStatus); 
                var str1 = jQuery.trim(data);
                console.log("------------------- USER LOG ARRAY INFO ------------ ");
                console.log(str1);

                console.log(str1 === "success");
                // processLog(str1); //
            }

            // , "dataType"
        );
    });



});

function processLog(data) {

    if (data == 'success') {
        // goHome();
        // document.location = "/home/index.html";
        // $("#login_status").text("Login Successful");
        // sessionStorage["username"] = $("#username_field").val() ;
        // setTimeout(function() {
        //     $("#login_view").hide();
        //     $("#log_view").show();
        // }, 1000);

    }
    else {
        // $("#login_status")
        // $("#login_status").text ("Login Unsuccessful. Please Try Again.");

        // alert("Login Failure : User Id or Password is incorrect.");
    }

}

function processLogin(data) {
    if (data == 'success') {
        // document.location = "/home/index.html";
        $("#login_status").text("Login Successful");
        sessionStorage["username"] = $("#username_field").val();
        setTimeout(function () {
            $("#login_view").hide();
            $("#log_view").show();
        }, 700);

    }
    else {
        $("#login_status")
        $("#login_status").text("Login Unsuccessful. Please Try Again.");

        // alert("Login Failure : User Id or Password is incorrect.");
    }

}

function goHome() {
    document.location = "/home/index.html";
}



function processRegister(data) {
    if (data == 'success') {
        document.location = "/home/index.html";
    }
    else {
        alert("Registration failed.");
    }
}


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}



