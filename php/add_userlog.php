<?php
// session_start();
// echo "Hello world";
// //
// $username= "id3292210_ncuser"; 
// $password= "nutricare1";
// $hostname= "localhost";  
// {

$con=mysqli_connect("localhost","id3292210_ncuser","nutricare1","id3292210_nutricare");
// // Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
} 


$usrname = $_POST["user"];
$Current_Weight = $_POST["Current_Weight"];
$full_date = $_POST["full_date"];
$Current_BMI = $_POST["Current_BMI"];


$sql = "INSERT INTO users_log VALUES ('$usrname','$full_date',$Current_Weight,$Current_BMI);";

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


mysqli_close($con);	

?>

