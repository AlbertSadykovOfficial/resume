<?php
		switch ($_SESSION['theme'])
    {
      case 'DARK':
          echo "<script>let theme_by_session = 'dark_mode';</script>";
          break;
      case 'LIGHT':
          echo "<script>let theme_by_session = 'light_mode';</script>";
          break;
      default:
          echo "<script>let theme_by_session = 'default_mode';</script>";
    }

?>