<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img id="navbar_img" src="error" alt="" width="24" height="24" onerror="change_src(this, '/imgs/logob.png')" data-loadcount=0 style='vertical-align: sub;'> Resume
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <?php
            if (isset($_SESSION['email']))
            {
              echo "<li class='nav-item'>
                    <a class='nav-link active' href='#' onclick='redirect_to(\"/pages/profile/\")'>Личный кабинет</a>
                  </li>";
            }
        ?>
      </ul>
      <span class="navbar-text">
          <button id="theme_button" class="btn btn-dark" onclick="dark_mode()">DARK</button>
          <?php
            if (isset($_SESSION['email']))
            {
                echo "<button class='btn btn-dark' onclick='redirect_to(\"/pages/authentication/logout/\")'>Выход</button>";
            }
            else
            {
              echo "<button class='btn btn-primary' onclick='redirect_to(\"/pages/authentication/login/\")'>Вход</button> ";
              echo "<button class='btn btn-success' onclick='redirect_to(\"/pages/authentication/signup/\")'>Регистрация</button>";
            }
        ?>
      </span>
    </div>
  </div>
</nav>