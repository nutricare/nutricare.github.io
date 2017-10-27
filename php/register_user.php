<?php
// session_start();
// echo "Hello world";
// //
// $username= "id3292210_ncuser"; 
// $password= "nutricare1";
// $hostname= "localhost";  
// {
//     echo "The variable $_POST[username] exists $_POST[password].";
// }
$con=mysqli_connect("localhost","id3292210_ncuser","nutricare1","id3292210_nutricare");
// // Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
} 
// echo "success" ; 

$usrname = $_POST["Username"];
// echo '$usrname';
$fname = $_POST["fname"];
$lname = $_POST["lname"];
// $passwrd = $_POST["password"];
$height = $_POST["height"];
$weight = $_POST["weight"];
$goal = $_POST["goal"];
$goal_weight = $_POST["goal_weight"];
$address = $_POST["address"];
$pwd = $_POST["pwd"];
$ini_bmi = $_POST["ini_bmi"];

// $usrname = $mysqli->real_escape_string($usrname);
// $passwrd = $mysqli->real_escape_string($passwrd);


// echo $usrname . "  " . $passwrd  . " ";

// $sql1 = "INSERT INTO `users` (`username`, `first_name`, `last_name`, `height`, `initial_weight`, `goal_weight`, `goal_type`, `initial_bmi`, `address`, `password`) VALUES ('test6', 'A', 'B', '11.11', '120.11', '111.11', 'TEST', '20.00', 'TESTADDRESS', '!!!!');";
$sql = "INSERT INTO users VALUES ('$usrname','$fname','$lname',$height,$weight,$goal_weight,'$goal',$ini_bmi,'$address','$pwd');";
// $sq3 = "INSERT INTO (`username`) `users  ('$usrname');";
$result = mysqli_query($con, $sql);
// echo $result;
// echo $sql;
if ($result) {
     echo "success" ;
    // if($row = mysqli_fetch_array($result)) {
    //     echo "success" ;
    //   }
    //   else{
    //     echo "failure" ;
    //   }

} 
else {
    echo "failure" ;
}

//
// if (isset($_POST["username"])  && isset($_POST["password"]) )
// {	
//     // echo $_POST["username"] ;
    
//     // echo $ppassword; 
      
// }
    


mysqli_close($con);	

?>

