<?php
echo <<<_END
        <h3>Изменение данных</h3>
        <form method='POST' action=''>
          <div class="mb-3">
            <label for="InputOldPassword" class="form-label">Введите старый пароль</label>
            <input type="password" class="form-control" id="InputOldPassword"  name='old_pass' maxlength='16'>
          </div>
          <div class="mb-3">
            <label for="InputNewPassword" class="form-label">Введите новый пароль</label>
            <input type="password" class="form-control" id="InputNewPassword" maxlength='16' name='new_pass'>
          </div>
          <div class="mb-3">
            <label for="RetryNewPassword" class="form-label">Повторите новый пароль</label>
            <input type="password" class="form-control" id="RetryNewPassword" maxlength='16' name='retry_new_pass'>
          </div>
            <input type="number" name='user_id' value=$user_id hidden>
          <button type="submit" class="btn btn-warning">Изменить данные</button>
        </form>
_END;
?>