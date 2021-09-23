<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
		<?php require_once("templates/head.html"); ?>
</head>
<body>

		<?php
				require_once("../../templates/toggle.html");
				require_once("../../templates/bind_theme.php");
				require_once("../../templates/nav.php");
				require_once("templates/container.html");
				require_once("templates/bind_js.php");
				require_once("templates/script_upload.html");
		?>

</body>
</html>
<!--
<script src="../view/js/html_elements/elements.js"></script>
<script src="../view/js/structures/structures.js"></script>
<script src="../view/js/structures/field_types.js"></script>
<script src="../view/js/structures/mirror_replication.js"></script>
<script src="js/create_table.js"></script>
<script src="js/addons.js"></script>
<script src="js/create_elements.js"></script>
<script src="js/grab.js"></script>
<script src="js/paginator.js"></script>

<script>
		create_form();
</script>

<script src="js/bind_data.js"></script>
<script src="../../../js/themes/dark_theme.js"></script>
-->