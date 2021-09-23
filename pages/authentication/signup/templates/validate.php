<?php
$EMPTY = "";
$error = $email = $user = $pass = $EMPTY;

if (isset($_POST['email']))
{
    $email 		= strtolower(sanitizeString($_POST['email']));
    $pass 		= sanitizeString($_POST['pass']);
    $retry_pass = sanitizeString($_POST['retry_pass']);

    $user_name      = sanitizeString($_POST['user_name']);
    $user_surname   = sanitizeString($_POST['user_surname']);

    $theme = sanitizeString($_POST['theme']);

    switch ($theme) 
    {
      case 'dark':
          $theme = 'DARK';
          break;
      case 'light':
          $theme = 'FALSE'; 
          break;
      default:
          $theme = 'DEFAULT';
    }

    if ($email == $EMPTY || $user_name == $EMPTY || $pass == $EMPTY)
    {
        echo 'Данные введены не во все поля';
    }
    else
    {
	
        $result = queryMySQL("SELECT * FROM users WHERE email = '$email'");
        if ($result->num_rows) 
            $error = 'Аккаунт с такой почтой уже существует<br>';
        else
        {
            if ($pass === $retry_pass)
            {
                queryMySQL("INSERT INTO users VALUES(NULL,'$email','$pass','$user_name','$user_surname', '$theme')");
                die("<h4>Аккаунт Создан</h4> Пожалуйста, <a id='href' href='../login/'>(войдите)</a>. <script>document.getElementById('href').click();</script><br><br>");
            }else
            {
                $error = 'Пароли не совпадают<br>';
            }
		
        }
    }
}
?>