<?php
echo <<<_END
        <h3>Введите данные для входа</h3>
        <div>$error</div>
        <form action='' method='POST'>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Почта (email)</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' maxlength='50'>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="exampleInputPassword1" maxlength='16' name='pass'>
          </div>
          <button type="submit" class="btn btn-primary">Войти</button>
        </form>
_END;
?>