<?php session_start(); ?>
<?php require_once('../../templates/functions.php') ?>
<?php
		
		if (isset($_SESSION['user_id']) && isset($_POST['portfolio_id']))
		{
				$portfolio_id = sanitizeString($_POST['portfolio_id']);
				$user_id = sanitizeString($_SESSION['user_id']);
				queryMySQL("DELETE FROM portfolio WHERE hash_id='$portfolio_id' AND user_id=$user_id");

				echo "true";
		}
		else
		{
				echo "false";
		}

?>