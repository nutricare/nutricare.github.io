<!DOCTYPE html>
<html>
	<head>
	<script type="text/javascript" src="/wp-content/themes/goodnews5/js/jquery-latest.js"></script> 
	<script type="text/javascript" src="/wp-content/themes/goodnews5/js/jquery.tablesorter.js"></script> 
	<link rel="stylesheet" type "text/css" href="/wp-content/themes/goodnews5/css/jquery-ui.css">
	<link rel="stylesheet" type="text/css" href="/wp-content/themes/goodnews5/css/jquery.dataTables.css">
	<script type="text/javascript" src="/wp-content/themes/goodnews5/js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="/wp-content/themes/goodnews5/js/jquery-1.12.4"></script>
	<script type="text/javascript" charset="utf8" src="/wp-content/themes/goodnews5/js/jquery.dataTables.js"></script>
	<script type="text/javascript" src="/wp-content/themes/goodnews5/js/dataTables.filter.html.js"></script>
	<link rel="stylesheet" type "text/css" href="/wp-content/themes/goodnews5/css/styles.css">

	</head>
	
	<div class="center">
	
		
</html>
<?php
  $conn = new mysqli('localhost','id3292210_ncuser' , 'nutricare1', 'id3292210_nutricare');
  if ($conn->connect_error) die($conn->connect_error);

  $query  = "SELECT * FROM Calories";
  $result = $conn->query($query);
  if (!$result) die ("Database access failed: " . $conn->error);

  $rows = $result->num_rows;
  echo "<div class='container'>";
  echo "<div class='center'><table id='Calories' class='stripe hover compact order-column'><thead><tr><th>Food</th><th>Calories</th></thead><tbody>";

  for ($j = 0 ; $j < $rows ; ++$j)
  {
    $result->data_seek($j);
  	$row = $result->fetch_array(MYSQLI_NUM);

  	echo "<tr>";
  	for ($k = 0 ; $k < sizeof($row) ; ++$k) echo "<td>$row[$k]</td>";
  	echo "</tr>";
  }

  echo "</tbody></table></div></div>";
  
?>
<html>
<div class='container'>
	<script type="text/javascript" class="init">
	$(document).ready(function() {
		$('#NutriCare').dataTable({
			scrollY: 600,
			paging: false
			
		});
	} );
	$(document).width(500).css("text-align", "center");

	</script>
	</div>
</div>
</html>