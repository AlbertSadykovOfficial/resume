<?php
		require_once('../../templates/functions.php');
		if (isset($_GET['portfolio']))
		{
				$portfolio = $_GET['portfolio'];
				$result = queryMySQL("SELECT name, json FROM portfolio WHERE hash_id='$portfolio'")->fetch_array(MYSQLI_ASSOC);
				$bind_name = $result["name"];
				$bind_json = $result["json"];
				if ($bind_json != '')
				{
						echo "<script>".
										"let bind_name = '$bind_name';".
										"let bind_json = $bind_json;".
									"</script>";
				}
		}
?>