<?php
    $EMPTY = "";

    if (isset($_POST['email'])) 
    {
        $email = strtolower(sanitizeString($_POST['email']));
        $pass = sanitizeString($_POST['pass']);

        if ($email == $EMPTY || $pass == $EMPTY) 
        {
            $error = 'Сообщение: Не все поля заполнены<br>';
        }
        else
        {
            $result = queryMySQL("SELECT email, pass 
                                    FROM users 
                                    WHERE email='$email' AND pass='$pass'");

            if ($result->num_rows == 0)
            {
                $error = "<span class='error'>Сообщение: Имя/Пароль не верны $email , $pass</span><br>";
            }
            else
            {
                    
                $result =  queryMySQL("SELECT id, theme
                                        FROM users 
                                        WHERE email='$email' AND pass='$pass'")->fetch_array(MYSQLI_ASSOC);
                $_SESSION['user_id']   = $result['id'];
                $_SESSION['theme']     = $result['theme'];
                $_SESSION['email']     = $email;
                $_SESSION['user_pass'] = $pass;

                $user_id = $_SESSION['user_id'];

                echo    "<br>Вы вошли. Ваш id = $user_id <br>".
                        "Пожалуйтса".
                        "<a id='href' href='#' onclick=redirect_to('/pages/profile/')>"."(Нажмите ЗДЕСЬ)</a>,".
                        "чтобы продолжить.<br><br>";
                echo    "<script>document.getElementById('href').click();</script>";
            }
        }
     }
?>