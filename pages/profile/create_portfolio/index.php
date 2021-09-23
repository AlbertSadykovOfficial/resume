<?php
		session_start();
		require_once('../../templates/functions.php');

		if (isset($_SESSION['user_id']) && isset($_POST['data']) && isset($_POST['name']))
		{
				$data = addslashes($_POST['data']);
				$user_id = $_SESSION['user_id'];
				$name = sanitizeString($_POST['name']);
				queryMySQL("INSERT INTO portfolio (id, user_id, hash_id, name, json) VALUES (NULL, $user_id, NULL, '$name', '$data')");
				
				$id = queryMySQL("SELECT * FROM portfolio WHERE id=LAST_INSERT_ID()")->fetch_array(MYSQLI_ASSOC)['id'];
				$hash = generate_hash($id.$user_id.$data);
				queryMySQL("UPDATE portfolio SET hash_id='$hash' WHERE id=$id");
				header("Location: http://".$_SERVER['HTTP_HOST']."/pages/app/view/?portfolio=$hash");
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