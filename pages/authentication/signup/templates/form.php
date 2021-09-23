<?php
echo <<<_END
        <h3>Пожалуйста, введите следующие учетные данные для регистрации</h3>
        <form method='POST' action=''>
          <div class="mb-3">
            <label for="InputEmail" class="form-label">Почта (email)</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" name='email' maxlength='50' value='$email'>
          </div>
          <div class="mb-3">
            <label for="InputName" class="form-label">Имя</label>
            <input type="text" class="form-control" id="InputName" name='user_name' maxlength='30' value='$user_name'>
          </div>
          <div class="mb-3">
            <label for="InputSurName" class="form-label">Фамилия</label>
            <input type="text" class="form-control" id="InputSurName" name='user_surname' maxlength='30' value='$user_surname'>
          </div>
          <div class="mb-3">
            <label for="Select" class="form-label">Предпочтения темы</label>
            <select id="Select" class="form-select" name="theme">
              <option value="adaptive" checked>Адаптивная (по восходу/закату солнца)</option>
              <option value="light" onclick="light_mode()">Всегда светлая</option>
              <option value="dark" onclick="dark_mode()">Всегда темная</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="InputPassword" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="InputPassword" maxlength='16' name='pass'>
            <div id="passwordHelpBlock" class="form-text">
              Ваш пароль должен состоять из 8-16 символов, содержать буквы и цифры и не должен содержать пробелов, специальных символов или эмодзи.
            </div>
          </div>
          <div class="mb-3">
            <label for="RetryPassword" class="form-label">Повторите Пароль</label>
            <input type="password" class="form-control" id="RetryPassword" maxlength='16' name='retry_pass'>
          </div>
          <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
        </form>
_END;
?>