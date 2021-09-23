<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>RESUME</title>
	<!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">-->
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"> 

	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<script src="js/path.js"></script>
</head>
<body>
		
		<?php
				require_once("pages/templates/toggle.html");
				require_once("pages/templates/nav.php");
		?>

		<main>

			<div class="container px-5">
			  <div class="row" style='height: 85vh;'>
			    <div class="col-md-6 m-auto">
			    	<h1 class='self-header'>Создай Резюме<br>21 Века</h1>
			    	<p>Мы не делаем многого,<br>Мы лишь создаем первое впечаление о вас</p>
			    	<button class='btn w-50 rounded-pill p-3' 
			    					style='background-color: #18AC77; color:white' 
			    					onclick='redirect_to("/pages/authentication/signup/")'>
			    				Зарегистрироваться
			    	</button>
			    </div>
			    <div class="col-md-6 m-auto">
			    		<img src="imgs/orginize_resume.svg" class='w-100'>
			    </div>
			  </div>
			  <h1 class='mt-5 self-header'>Почему мы?</h1>
			  <h3 class="self-justify">По статистике, работодателю требуется <b>3 секунды</b>, чтобы понять следует ему <b>читать</b> резюме или <b>нет</b>. При чем важно все: от фотографии и шрифтов, до цветовой палитры и правильной композиции блоков информации. Придумайте как себя представить, найдите/сделайте хорошее фото, а мы позаботимся об остальном.</h3>
			  

			  <h1 class='mt-5 self-header wow pulse' data-wow-delay="0.2s" >&#128640; Скорость</h1>
			  <div class="row m-auto self-100vh">
			  	
			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5"> <!-- jackInTheBox, fadeInLeft zoomInRight-->
					    		<img src="imgs/form.svg" class='w-75 wow zoomInRight' data-wow-delay="0.3s">
					    </div>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Все, что вам нужно<br>Это заполнить форму</h1>
					    </div>
					   </div>
					 </div>

			  </div>

			  <h1 class="self-header">&#128188; Конвертируемость</h1>
			  <div class="row m-auto self-100vh">

			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Экспорт в .pdf</h1>
					    </div>
					    <div class="col-md-6 p-5">
					    		<img src="imgs/export.svg" class='w-75 wow bounceInDown' data-wow-delay="0.3s">
					    </div>
					  </div>
					</div>

			  </div>
				
				<h1 class="self-header">&#128077; Легкодоступность</h1>
			  <div class="row m-auto self-100vh">

			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5">
					    		<img src="imgs/easy.svg" class='w-75 wow jackInTheBox' data-wow-delay="0.3s">
					    </div>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Ваша информация хранится на сервере и доступна 24/7 для вас и работодателей по уникальной ссылке</h1>
					    </div>
					   </div>
			    </div>

			  </div>

				<h1 class="self-header">&#128241; Отображение</h1>
			  <div class="row m-auto self-100vh">
			  	
			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Ваше портфолио хорошо выглядит как на компьютере, так и на смартфоне</h1>
					    </div>
					    <div class="col-md-6 p-5">
					    		<img src="imgs/devices.svg" class='w-75 wow fadeInRight' data-wow-delay="0.3s">
					    </div>
					   </div>
					 </div>

			  </div>

				<h1 class="self-header">&#128161; Интуитивность</h1>
			  <div class="row m-auto self-100vh">

			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5">
					    		<img src="imgs/research.svg" class='w-75 wow bounceInLeft' data-wow-delay="0.3s">
					    </div>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Мы провели анализ и расположили информацию так, чтобы заинтересовать работодателя</h1>
					    </div>
					   </div>
			    </div>

			  </div>


				<h1 class="self-header wow pulse"><img src="https://img.icons8.com/doodle/96/000000/repository.png"/> Интеграция с GitHub</h1>
			  <div class="row m-auto self-100vh">
			  	
			  	<div class='col-12 m-auto'>
			  		<div class='row rounded-pill self-bg-aliceblue'>
					    <div class="col-md-6 p-5 m-auto">
					    	<h1 class="self-text">Если у вас есть проекты на GitHub, то при указании имени профиля, будет произведена автоматическая подгрузка проектов с описанием, языками программирования и ссылкой на проект</h1>
					    </div>
					    <div class="col-md-6 p-5">
					    		<img src="imgs/github-octocat.svg" class='w-75  wow bounceInRight' data-wow-delay="0.3s">
					    </div>
					   </div>
					 </div>

			  </div>

			</div> <!-- container -->
		</main>


		<footer class="container">
		  	<div class="row text-center self-100vh">
			   <div class="row m-auto">
			  	<h1 class="self-header"><div>Присоединяйтесь к нам,</div><div>присоединяйтесь к будущему</div></h1>
			  	<div class="row m-auto">
			  		<button class='btn w-25 rounded-pill mt-3 p-3 mx-auto d-block wow bounceInLeft' 
			  						data-wow-delay="0.3s" 
			  						style="background-color: #65B2DD; color: white"
			  						onclick='redirect_to("/pages/app/view/?portfolio=0af4e5d551")'>
			  						Демо
			  		</button>
			  	</div>
			  	<div class="row m-auto">
			  		<button class='btn w-25 rounded-pill mt-3 p-3 mx-auto wow bounceInRight' 
			  						data-wow-delay="0.3s" 
			  						style='background-color: #65DDB9; color:white'
			  						onclick='redirect_to("/pages/authentication/signup/")'>
			  						Регистрация
			  		</button>
			  	</div>
			  </div>
			</div>
		</footer>
		<script>
			function dark_mode()
			{
					document.getElementsByTagName('body')[0].classList.add(...['bg-dark', 'text-light']);
					document.getElementsByTagName('nav')[0].classList.add(...['navbar-dark', 'bg-dark']);
					document.getElementById('navbar_img').src = location.origin + "/imgs/logow.png";
					Array.prototype.slice.call(document.getElementsByClassName('self-bg-aliceblue')).map( 
							elem => { 
									elem.classList.add(...['text-dark']); 
									if (!elem.classList.contains('navbar'))
											elem.style='background-color: rgb(45, 50, 57) !important; color:white !important'
								});

					document.getElementById('theme_button').innerHTML = "Light";
					document.getElementById('theme_button').classList.remove("btn-dark");
					document.getElementById('theme_button').classList.add("btn-light");
					document.getElementById('theme_button').setAttribute("onclick", "mode(light_mode)");
			}

			function light_mode()
			{
					document.getElementsByTagName('body')[0].classList.remove(...['bg-dark', 'text-light']);
					document.getElementsByTagName('nav')[0].classList.remove(...['navbar-dark', 'bg-dark']);
					document.getElementById('navbar_img').src = location.origin + "/imgs/logob.png";
					Array.prototype.slice.call(document.getElementsByClassName('self-bg-aliceblue')).map( 
							elem => { 
									elem.classList.remove(...['text-dark']); 
									if (!elem.classList.contains('navbar'))
									{
											elem.classList.add('bg-light')
											elem.style = '';
											elem.classList.add('text-dark');
									}
								});

					document.getElementById('theme_button').innerHTML = "Dark";
					document.getElementById('theme_button').classList.remove("btn-light");
					document.getElementById('theme_button').classList.add("btn-dark");
					document.getElementById('theme_button').setAttribute("onclick", "mode(dark_mode)");

			}

			function default_mode()
			{
				let now = new Date();
				let sunrise = 9;
				let sunset = 20;
				if (sunrise < now.getHours() && now.getHours() < sunset)
						light_mode();
				else
						dark_mode();

				if (sunrise <= now.getHours() && now.getHours() <= sunset)
				{
						let	date = new Date();
						date.setHours(sunset,0,0);
						setTimeout(dark_mode, date - new Date());
				}
				else if ((0 < now.getHours() && now.getHours() < sunrise))
				{
						let	date = new Date();
						date.setHours(sunrise,0,0);
						setTimeout(light_mode, date - new Date());
				}
				else if (now.getHours() > sunset && 24 < now.getHours())
				{
						let	date = new Date();
						date.setDate(date.getDate() + 1);
						date.setHours(sunrise,0,0);
						setTimeout(light_mode, date - new Date())
				}
			}
			default_mode();
		</script>

		<script src="js/wow.min.js"></script>
		<script> new WOW().init(); </script> 
</body>
</html>