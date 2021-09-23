<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<?php
			require_once("templates/header.html")
	?>
</head>
<body>
		<?php
				require_once("../templates/bind_theme.php");
				require_once("../templates/toggle.html");
				require_once("../templates/nav.php");
		?>
		<main>
				<div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
				  <h1 class="display-4">Цены</h1>
				  <p class="lead">Вы можете выбрать один из следующих тарифов, как вы видите, есть много вариантов получить подписку бесплатно</p>
				</div>


				<div class="container">
				  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
				    <div class="col">
				      <div class="card mb-4 shadow-sm">
				      <div class="card-header">
				        <h4 class="my-0 font-weight-normal">Бесплатно</h4>
				      </div>
				      <div class="card-body">
				        <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ мес.</small></h1>
				        <ul class="list-unstyled mt-3 mb-4">
				          <li>Пригласи 10 пользователей</li>
				          <li>Каждый 100 зарегистрировшийся</li>
				          <li>Поддержка по email</li>
				          <li>Доступ к справочному центру</li>
				        </ul>
				        <button type="button" class="btn btn-lg btn-block btn-outline-primary">Подпишитесь бесплатно</button>
				      </div>
				    </div>
				    </div>
				    <div class="col">
				      <div class="card mb-4 shadow-sm">
				      <div class="card-header">
				        <h4 class="my-0 font-weight-normal">Pro</h4>
				      </div>
				      <div class="card-body">
				        <h1 class="card-title pricing-card-title">$60 <small class="text-muted">/ мес.</small></h1>
				        <ul class="list-unstyled mt-3 mb-4">
				          <li>Включено 20 пользователей</li>
				          <li>10 ГБ памяти</li>
				          <li>Приоритетная поддержка по email</li>
				          <li>Доступ к справочному центру</li>
				        </ul>
				        <button type="button" class="btn btn-lg btn-block btn-primary">Начать</button>
				      </div>
				    </div>
				    </div>
				    <div class="col">
				      <div class="card mb-4 shadow-sm">
				      <div class="card-header">
				        <h4 class="my-0 font-weight-normal">Enterprise</h4>
				      </div>
				      <div class="card-body">
				        <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ мес.</small></h1>
				        <ul class="list-unstyled mt-3 mb-4">
				          <li>Включено 30 пользователей</li>
				          <li>15 ГБ памяти</li>
				          <li>Поддержка по телефону и email</li>
				          <li>Доступ к справочному центру</li>
				        </ul>
				        <button type="button" class="btn btn-lg btn-block btn-primary">Связаться с нами</button>
				      </div>
				    </div>
				    </div>
				  </div>
		</main>
</body>
	<?php  
			require_once("templates/script_upload.html");
	?>
</html>