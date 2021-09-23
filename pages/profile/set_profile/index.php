<?php
		session_start();
		require_once('../../templates/functions.php');
		if (isset($_POST['id']) && isset($_POST['data']) && isset($_POST['name']))
		{	
				$name = sanitizeString($_POST['name']);
				$user_id = $_SESSION['user_id'];
				$portfolio = $_POST['id'];
				$data = addslashes($_POST['data']);
				queryMySQL("UPDATE portfolio SET json='$data', name='$name' WHERE user_id=$user_id AND hash_id='$portfolio'");
				header("Location: http://".$_SERVER['HTTP_HOST']."/pages/app/view/?portfolio=$portfolio");
		}
?>