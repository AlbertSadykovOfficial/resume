<?php
    if (isset($_SESSION['email'])) 
    {
        $user_id    = $_SESSION['user_id'];

        $user = queryMySQL("SELECT * FROM users WHERE id=$user_id")->fetch_array(MYSQLI_ASSOC);
        require_once('templates/profile.php');


        echo '<div class="container pt-5" style="min-height:100vh; z-index:1">
                <div class="row pt-5 m-auto text-center">
                    <h4 id="my_resumes">Мои резюме</h4>
                </div>';

        $result = queryMySQL("SELECT * FROM portfolio WHERE user_id=$user_id");
        for ($i=0; $i<$result->num_rows; $i++) 
        {
            $item = $result->fetch_array(MYSQLI_ASSOC);
            require('templates/my_resume.php');
        }

        if (!$result->num_rows)
        {
            echo "Ой-Ой, не порядок, у вас ни одного резюме... <a href='#' onclick=\"redirect_to('/pages/app/form/')\">Создать</a>";
        }

        echo "</div>";
    }
    else 
    {
        echo '<div class="container pt-5 text-center" style="min-height:100vh"><div class="row text-center"><div class="col-md-6 m-auto">Вы не зарегистрированы</div></div><div class="row"><div class="col-md-6 m-auto"><a class="btn btn-success" href="../authentication/login/">Войти в аккаунт</a></div></div></div>';
    }
?>