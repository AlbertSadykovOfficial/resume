<?php session_start(); ?>
<?php require_once('../../templates/functions.php') ?>
<?php
		
		if (isset($_SESSION['user_id']) && isset($_POST['portfolio_id']))
		{
				$portfolio_id = sanitizeString($_POST['portfolio_id']);
				$user_id = sanitizeString($_SESSION['user_id']);
				$data = queryMySQL("SELECT json, name FROM portfolio WHERE hash_id='$portfolio_id' AND user_id=$user_id")->fetch_array(MYSQLI_ASSOC);
				queryMySQL("INSERT INTO portfolio (id, user_id, hash_id, name, json) VALUES (NULL, $user_id, NULL, '".$data["name"]."', '".addslashes($data["json"])."')");

				$id = queryMySQL("SELECT * FROM portfolio WHERE id=LAST_INSERT_ID()")->fetch_array(MYSQLI_ASSOC)['id'];
				$hash = generate_hash($id.$user_id.$data);
				queryMySQL("UPDATE portfolio SET hash_id='$hash' WHERE id=$id");

				echo "true";
		}
		else
		{
				echo "false";
		}

		function generate_hash($str)
		{
				$hash = $str;
				$not_ok = 1;

				while ($not_ok)
				{		
						$hash = sha1(uniqid('hash_id'.$hash));
						$hash = substr($hash, 0, 10);
						$not_ok = queryMySQL("SELECT hash_id FROM portfolio WHERE hash_id='$hash'")->num_rows;
				}
				return $hash;
		}
?>