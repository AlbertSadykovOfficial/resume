<?php

$EMPTY = "";
if (isset($_POST['old_pass']) && isset($_POST['new_pass']))
{
		$old_pass 			= strtolower(sanitizeString($_POST['old_pass']));
    $new_pass 			= strtolower(sanitizeString($_POST['new_pass']));
    $retry_new_pass	= sanitizeString($_POST['retry_new_pass']);
    $user_id    		= sanitizeString($_POST['user_id']);

    if ($old_pass != $EMPTY && $old_pass != $EMPTY)
    {
		    if ($new_pass == $retry_new_pass)
		    {
		    		$result = queryMySQL("SELECT * FROM users WHERE id=$user_id AND pass='$old_pass'");
		    		if ($result->num_rows > 0)
		        {
		        		queryMySQL("UPDATE users SET pass='$new_pass' WHERE id=$user_id AND pass='$old_pass'");
		            die("<h4>Пароль изменен</h4> Вы можете войти в <a id='href' href='../'>личный кабинет</a>. <script>document.getElementById('href').click();</script><br><br>");
		        }
		        else
		        {
		        		echo 'Неправлильно введен старый пароль<br>';
		        }
		    }
		}
		else
		{
				echo 'Данные введены не во все поля';
		}
}
else
{
    $user_id = $_GET['user_id'];
}

?>