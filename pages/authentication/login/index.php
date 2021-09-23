<?php 
    require_once('../../templates/header.php');
    require_once('../../templates/bind_theme.php');
    require_once("../../templates/toggle.html");
?>

<script src="../../../js/path.js"></script>

<div class="container mt-5">
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