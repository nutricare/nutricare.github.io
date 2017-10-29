
<?php

  $conn = new mysqli('localhost','id3292210_ncuser' , 'nutricare1', 'id3292210_nutricare');

  if ($conn->connect_error) die($conn->connect_error);



  $query  = "SELECT * FROM Calories";

// Check if there are results
if ($result = mysqli_query($con, $sql))
{
	// If so, then create a results array and a temporary one
	// to hold the data //
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

