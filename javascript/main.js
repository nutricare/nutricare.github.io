// ------------------------------------------------------------- 

var foodJSON = {};
var exerJSON = {};
var logJSON = {};

function loadPage(element) {

    switch (element) {
        case "Home":
            getFood();
            getExercises();
            break;

        case "weight_log":
            console.log(element + " ------------- ");
            buildTable();
            break;
    }

}


function buildTable() {
    var table = document.getElementById("wlogrow");
    var user = sessionStorage["username"];
    
    // console.log('wlogtable');
    // console.log('wlogtable' + logJSON);
    $.ajax( {
        type: "POST",
        dataType: "json",
        url : "../php/get_users_log.php",  data : {
        'username': user
    }
        , 
        success: function (response, textStatus, jqXHR) {
            // console.log(("Login successful"); 
            // console.log((textStatus); 
            // var str1 = jQuery.trim(data);
            // console.log("------------------- USER LOG ARRAY INFO ------------ ");
            // console.log(str1);

            // console.log(str1 === "success");
            // processLog(str1); //
            console.log("---------- each row pop---------------");
            console.log(response);
            var str1 = jQuery.trim(response);
            console.log(response);
            logJSON = response;
            // buildTable(response);
           


            $.each(response, function (i, item) {
                console.log("---------- each row build ---------------");
                console.log(item.date);
                console.log(item.weight);
                console.log(item.bmi);
                var tr = table.insertRow();
                var dat = tr.insertCell();
                dat.innerHTML= item.date;
                var weightt = tr.insertCell();
                weightt.innerHTML= item.weight;
                var bmii = tr.insertCell();
                bmii.innerHTML= item.bmi;

            });
        }}
    );

    // setTimeout(function () {
    //     logJSON.forEach(function (element) {
    //         console.log("---------- each row build ---------------");
    //         console.log(element.date);
    //         console.log(element.weight);
    //         console.log(element.bmi);
    //         var tr = table.insertRow();
    //         var dat = tr.insertCell();
    //         dat.innerHTML= element.date;
    //         var weightt = tr.insertCell();
    //         weightt.innerHTML= element.weight;
    //         var bmii = tr.insertCell();
    //         bmii.innerHTML= element.bmi;
    //     })



    //     console.log('wlogtable a');
    // }, 01 );

}




function setExerciseImage() {
    // alert("A");
    // console.log("\n\n\n-----------------------setExerciseImage-----------");
    // var p = document.getElementById("select_exercises");
    // var q = $('#select_exercises').val(); 
    var selectedItem = $('#select_exercises :selected').text();

    console.log(selectedItem);
    var img = document.getElementById("exercise_image");
    var srcc = '/images/' + selectedItem + ".jpg";
    img.src = srcc.toLowerCase();

    console.log(img.src);

}

function getFood() {


    $.getJSON('../php/get_Calories.php', function (data) {
        // console.log(data); //
        var p = document.getElementById("food_item_list");
        p.innerHTML = "";
        var s = "<option value='' disabled selected>Select a food item</option>";
        foodJSON = data;
        $.each(data, function (i, item) {
            s += "<option>" + item.Food + " </option>";
        });
        p.innerHTML = s;
        // console.log(p);

    });


}

// $(document).ready(function () {
function setCalories() {
    var quant = $("#Quantity").val();

    calcSetCalories(quant);

}

function calcSetCalories(quant) {
    // var foodData = obj;
    var p = $("#food_item_list").val();
    var c = $("#Calories");

    foodJSON.forEach(function (element) {
        // console.log(element);
        if (element["Food"] == p) {

            var cal = parseFloat(element.Calories);
            cal *= quant;
            cal = cal.toFixed(2);
            // element.Real_Calorie_Burned_ph.tofixed(2);
            $("#Calories").val(cal);
        }
    })


}


function getExercises() {

    $.getJSON('../php/get_exercises.php', function (data) {
        // console.log(data);
        // var p = document.getElementById("food_item_list");
        // p.innerHTML = "";
        // var s = "<option value='' disabled selected>Select a food item</option>";
        exerJSON = data;
        // localStorage['exerJSON'] = exerJSON;
        // $.each(data, function (i, item) {
        // s += "<option>" + item.Food + " </option>";
        // localStorage['exerJSON_Exercise'+i] = item.Exercise;
        // localStorage['exerJSON_Category'+i] = item.Category;
        // localStorage['exerJSON_Category_2'+i] = item.Category_2;
        // localStorage['exerJSON_Real_Calorie_Burned_ph'+i] = item.Real_Calorie_Burned_ph;

        // });
        // p.innerHTML = s;
        // console.log(p);

    });
    // console.log("getTEST called");
    // var p = $("#food_item_list").val();
    // var c = $("#Calories");

    // $.getJSON('../php/get_Calories.php', function (data) {
    //     foodJSON = data;
    // });
    // console.log("p ----------");

    // console.log(p);
    //



    // setTimeout(function () {
    //     foodJSON.forEach(function (element) {
    //         // console.log(element);
    //         if (element["Food"] == p) {
    //             console.log("A");
    //             console.log("_________________________________________________");
    //             console.log(element.Exercise + "- - - - - - - - - - - ");
    //             console.log(element.Category + "- - - - - - - - - - - ");
    //             console.log(element.Real_Calorie_Burned_ph + "- - - - - - - - - - - ");
    //             var cal = parseFloat(element.Calories);
    //             cal = cal.toFixed(2);
    //             // element.Real_Calorie_Burned_ph.tofixed(2);
    //             $("#Calories").val(cal);
    //         }
    //     });
    // }, 2500);


}




// });

$(function () {
    $('.add').on('click', function () {
        var $qty = $("#Quantity");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
        calcSetCalories(currentVal + 1);
    });
    $('.minus').on('click', function () {
        var $qty = $("#Quantity");
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            $qty.val(currentVal - 1);
            calcSetCalories(currentVal - 1);
        }

    });
});

$(document).ready(function () {
    $("#showexercises").on('click', function () {
        var qty = $("#Quantity").val();
        var foodItem = $("#food_item_list").val();
        var cal = $("#Calories").val();
        var peg = $("#select_exercise_group").val();

        console.log("onclick show calculate happens");

        console.log(foodItem);
        console.log(cal);
        console.log(peg);

        if (exerJSON == null) {
            console.log("exerJSON is null");

            $.getJSON('../php/get_exercises.php', function (data) {
                exerJSON = data;
            })
        }
        count = 1;

        var p = document.getElementById("select_exercises");
        p.innerHTML = "";
        var s = "<option value='' disabled selected>Select a food item</option>";
        p.innerHTML = s;

        exerJSON.forEach(function (element) {

            // console.log( count);
            // console.log(element["Category"]);
            // console.log(peg);
            // // console.log(element["Real_Calorie_Burned_ph"]);

            // count++;
            // // console.log("1 : ");
            // // console.log(element["Real_Calorie_Burned_ph"] >= cal);
            // // console.log("2 : " );
            // console.log(element["Category"] == peg );



            if (element["Real_Calorie_Burned_ph"] > cal && element["Category"] == peg) {
                var e_cal = element["Real_Calorie_Burned_ph"];
                var e_cat = element["Category"];
                var e_exr = element["Exercise"];

                console.log(element);
                // alert("asasasasasazzzzzzzzzzzzzzzzz");
                console.log(element["Category"]);
                console.log(element["Real_Calorie_Burned_ph"]);

                // var cal = parseFloat(element.Calories);
                // cal *= quant;
                // cal = cal.toFixed(2);
                // // element.Real_Calorie_Burned_ph.tofixed(2);
                // $("#Calories").val(cal);

                s = "<option value=" + e_exr + ">" + e_exr + "</option>";
                // + ";" + e_cat +";" + e_cal
                p.innerHTML += s;

                console.log(s);
                var e_cal = "";
                var e_cat = "";
                var e_exr = "";
            }




        });
    });



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


    $("#btn_add_log").on('click', function () {
        // var uname = document.getElementById("username_field").innerHTML;
        // var upwd = document.getElementById("password_field").innerHTML;
        var table = document.getElementById("wlogrow");
        table.innerHTML = "";

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

        $.post("../php/add_userlog.php", {
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
                logJSON = data;
                buildTable();
                
            }

            // , "dataType"
        );


    });



});
// function jquery start end

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
            // $("#login_view").hide();
            // $("#log_view").show();
            document.location = "/weightlog/";
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




// function a() {
//     var navbar = $("#navbar");
//     // var text = '  <nav class="navbar is-light"> 

//     //     <div class="navbar-brand">
//     //         <a class="navbar-item" href="https://nutricare.000webhostapp.com">
//     //             <h1 style="color:#00D1B2; font-weight:bolder; font-size:30px;font-style:italic;">NutriCare</h1>

//     //         </a>
//     //         <div class="navbar-burger burger" data-target="navMenuColorlight-example">
//     //             <span></span>
//     //             <span></span>
//     //             <span></span>
//     //         </div>
//     //     </div>

//     //     <div id="navMenuColorlight-example" class="navbar-menu">
//     //         <div class="navbar-start">
//     //             <a class="navbar-item" href="https://nutricare.000webhostapp.com"
//     //                 style="color:black;font-size:20px;" >
//     //                 <span class="icon">
//     //                     <i class="fa fa-home"></i>
//     //                 </span>

//     //                 Home
//     //         </a>
//     //         </div>

//     //         <div class="navbar-end">
//     //             <div class="navbar-item">
//     //                 <div class="field is-grouped">

//     //                     <p class="control">
//     //                         <a class="button is-primary" href="">
//     //                             <span class="icon">
//     //                                 <i class="fa  fa-sign-out "></i>
//     //                             </span>
//     //                             <span>Logout</span>
//     //                         </a>
//     //                     </p>

//     //                 </div>
//     //             </div>
//     //         </div>
//     //     </div>
//     // </nav>

// };