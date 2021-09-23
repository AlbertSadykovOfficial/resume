<?php 
    require_once('../../templates/functions.php');
    if (isset($_SESSION['email'])) destroySession();

    require_once('../../templates/header.html');
    require_once("../../templates/toggle.html");
    require_once('../../templates/nav.php');
    require_once('../../templates/bind_theme.php');
?>
<div class="container mt-5">
 <div class="row"></div>
  <div class="row">
    <div class="col-md-6 m-auto">
      <?php 
          require_once("templates/validate.php");
          require_once("templates/form.php");
      ?>
    </div>
  </div>
</div>
<?php require_once('../../templates/footer.html'); ?>