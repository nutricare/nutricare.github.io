<?php

// Create connection

$con=mysqli_connect("localhost","id3292210_ncuser","nutricare1","id3292210_nutricare");

// Check connection // 

if (mysqli_connect_errno())
{
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

//
$usrname = $_POST["username"];

// This SQL statement selects ALL from the table log_user table and check for the username
// // $sql = "SELECT * FROM users_log";
$sql = "SELECT * FROM users_log where username = '$usrname'";
// echo $sql;
// Check if there are results
if ($result = mysqli_query($con, $sql))
{
	// If so, then create a results array and a temporary one
	// to hold the data
	$resultArray = array();
	$tempArray = array();
 
	// Loop through each row in the result set
	while($row = $result->fetch_object())
	{
		// Add each row into our results array
		$tempArray = $row;
	    array_push($resultArray, $tempArray);
	}
 
	// Finally, encode the array to JSON and output the results
	echo json_encode($resultArray);
}
 
// Close connections
mysqli_close($con);
?>