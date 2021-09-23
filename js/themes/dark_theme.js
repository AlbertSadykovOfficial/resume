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

function dark_mode()
{
		if (document.getElementById('target'))
				document.getElementById('target').classList.add(...['bg-dark']);
		elems = document.getElementsByClassName('card');

		// Проблема со стилями - терется высота 100%
		for (let i=0; i<elems.length; i++)
		{
				//elems[i].classList.add('bg-dark');
				elems[i].style.backgroundColor = 'rgb(45, 50, 57)';// !important
				elems[i].classList.add('text-light');
				elems[i].classList.remove(...['text-dark', 'bg-light']);
		}
		elems = document.getElementsByClassName('card-footer');

		for (let i=0; i<elems.length; i++)
		{
				elems[i].classList.remove('bg-light');
				elems[i].classList.add('text-light');
				elems[i].style.borderTopColor = 'rgba(255, 255, 255, 0.13)';
		}

		elems = document.getElementsByTagName('table');

		for (let i=0; i<elems.length; i++)
		{
				elems[i].classList.remove('table-light');
				elems[i].classList.add('table-dark');
				if (elems[i].getElementsByTagName('thead')[0])
						elems[i].getElementsByTagName('thead')[0].classList.remove('table-secondary');
		}

		elems = document.getElementsByTagName('li');

		for (let i=0; i<elems.length; i++)
		{
				//elems[i].classList.add('bg-dark')
				if (!elems[i].classList.contains('nav-item'))
				{
						elems[i].style = 'background-color: rgb(45, 50, 57) !important';
						elems[i].classList.remove('text-dark');
						elems[i].classList.add('text-light');
				}
		}

		elems = document.getElementsByClassName('container');

		for (let i=0; i<elems.length; i++)
		{
				//elems[i].style.backgroundColor = '#141414';
				elems[i].classList.add(...['bg-dark', 'text-light']);
		}

		if (document.getElementsByClassName('btn-dark')[0])
		{
				document.getElementsByClassName('btn-dark')[0].classList.add('btn-light');
				document.getElementsByClassName('btn-dark')[0].classList.remove('btn-dark');
		}

		document.getElementsByTagName('body')[0].classList.add(...['bg-dark', 'text-light']);
		document.getElementsByTagName('nav')[0].classList.add(...['navbar-dark', 'bg-dark']);
		document.getElementById('navbar_img').src = location.origin + "/imgs/logow.png";

		document.getElementById('theme_button').innerHTML = "Light";
		document.getElementById('theme_button').classList.remove("btn-dark");
		document.getElementById('theme_button').classList.add("btn-light");
		document.getElementById('theme_button').setAttribute("onclick", "mode(light_mode)");
}

function light_mode()
{
		if (document.getElementById('target'))
			document.getElementById('target').classList.add(...['bg-light']);
		elems = document.getElementsByClassName('card');

		// Проблема со стилями - терется высота 100%
		for (let i=0; i<elems.length; i++)
		{
				elems[i].style.backgroundColor = '';
				elems[i].classList.remove(...['text-light', 'bg-dark']);
				elems[i].classList.add(...['text-dark', 'bg-light']);
		}
		elems = document.getElementsByClassName('card-footer');

		for (let i=0; i<elems.length; i++)
		{
				elems[i].classList.remove(...['bg-dark']);
				elems[i].classList.add(...['bg-light','text-dark']);
				elems[i].style.borderTopColor = 'rgba(0, 0, 0, 0.13)';
		}

		elems = document.getElementsByTagName('table');

		for (let i=0; i<elems.length; i++)
		{
				elems[i].classList.remove('table-dark');
				elems[i].classList.add('table-light');
				if (elems[i].getElementsByTagName('thead')[0])
						elems[i].getElementsByTagName('thead')[0].classList.add('table-secondary');
		}

		elems = document.getElementsByTagName('li');

		for (let i=0; i<elems.length; i++)
		{
				//elems[i].classList.add('bg-dark')
				if (!elems[i].classList.contains('nav-item'))
				{
					elems[i].style = '';
					elems[i].classList.add(...['bg-light', 'text-dark'])
				}
		}

		elems = document.getElementsByClassName('container');
		
		for (let i=0; i<elems.length; i++)
		{
				//elems[i].style.backgroundColor = '#141414';
				elems[i].classList.remove(...['bg-dark', 'text-light']);
		}

		if (document.getElementsByClassName('btn-light')[0])
		{
				document.getElementsByClassName('btn-light')[0].classList.add('btn-dark');
				document.getElementsByClassName('btn-light')[0].classList.remove('btn-light');
		}
		document.getElementsByTagName('body')[0].classList.remove(...['bg-dark', 'text-light']);
		document.getElementsByTagName('nav')[0].classList.remove(...['navbar-dark', 'text-light', 'bg-dark']);

		document.getElementsByTagName('body')[0].classList.add(...['text-dark']);
		document.getElementsByTagName('nav')[0].classList.add(...['navbar-light', 'bg-light']);
		document.getElementById('navbar_img').src = location.origin + "/imgs/logob.png";

		document.getElementById('theme_button').innerHTML = "Dark";
		document.getElementById('theme_button').classList.remove("btn-light");
		document.getElementById('theme_button').classList.add("btn-dark");
		document.getElementById('theme_button').setAttribute("onclick", "mode(dark_mode)")
}