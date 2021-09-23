<?php 
    require_once('../../templates/header.php');

    if (isset($_SESSION['email'])) 
    {
        destroySession();

    }
?>
        <script src="../../../js/path.js"></script>
        <div class = 'main'>
            <a href='#' onclick="redirect_to('/page/authentication/login/')">Вход</a>
            <br>
            <br>
        </div>

    </body>
<script type="text/javascript">
    document.getElementsByTagName('a')[0].click();
</script>
</html>