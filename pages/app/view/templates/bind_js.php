<?php
		require_once('../../templates/functions.php');
		if (isset($_GET['portfolio']))
		{
				$portfolio = $_GET['portfolio'];
				$bind_json = queryMySQL("SELECT json FROM portfolio WHERE hash_id='$portfolio'")->fetch_array(MYSQLI_ASSOC)["json"];
				echo "<script>let bind_json = $bind_json;</script>";
		}
?>