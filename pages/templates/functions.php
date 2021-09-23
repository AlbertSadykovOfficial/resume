<?php 
    $dbhost = 'localhost';
    $dbname = 'resume';
    $dbuser = 'admin_user_1';
    $dbpass = 'admin_password_1';

    $connection = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
    if ($connection->connect_error) die($connection->connect_error);


    function createTable($name, $query)
    {
        queryMySQL("CREATE TABLE IF NOT EXISTS $name($query)");
        echo "Таблица $name создана или уже существала<br>";
    }
 

    function queryMySQL($query)
    {
        global $connection;                                             // Обращение к подкючению БД вне функции
        $result = $connection->query($query);
        if(!$result) die ($connection->error);

        return $result;
    }


    function destroySession()
    {
        $_SESSION = array();                                            // Опустошаем сессию

        if (session_id() != '' || isset($_COOKIE[session_name()])) 
            setcookie(session_name(), '', time()-2592000,'/');          // Просрачиваем cookie

        session_destroy();
    }


    function sanitizeString($var)
    {
        global $connection;

        $var = strip_tags($var);
        $var = htmlentities($var);
        $var = stripslashes($var);

        return $connection->real_escape_string($var);
    }
 ?>