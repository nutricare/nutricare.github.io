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

$usrname = $_POST["username"];
$passwrd = $_POST["password"];
// $usrname = $mysqli->real_escape_string($usrname);
// $passwrd = $mysqli->real_escape_string($passwrd);


// echo $usrname . "  " . $passwrd  . " ";
$sql = "SELECT * FROM users where username = '$usrname' AND password = '$passwrd' ";

$result = mysqli_query($con, $sql);

if ($result) {
    if($row = mysqli_fetch_array($result)) {
        echo "success" ;
      }
      else{
        echo "failure" ;
      }


    
} 
else {
    echo "failure" ;
}

//
// if (isset($_POST["username"])  && isset($_POST["password"]) )
// {	
//     // echo $_POST["username"] ;
    
//     // echo $ppassword; 
      
// // }
    


mysqli_close($con);	

?>

