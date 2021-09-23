function print_input_row(template)
{
		document.getElementById(template + '_inputs').insertAdjacentHTML('beforeEnd', div_wrap(create_input_row(template), mirror[template][0]['name']));
}


function get_template_length(template)
{
		return Object.keys(mirror[template][1]).length;
}


function get_id()
{
		let params = window
	    .location
	    .search
	    .replace('?','')
	    .split('&')
	    .reduce(
	        function(p,e){
	            let a = e.split('=');
	            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
	            return p;
	        },
	        {}
	    );

		return params['portfolio']
}


function set_cookies(data)
{
		let form = document.createElement('form');
		let input_id 	 = document.createElement('input'); 
		let input_data = document.createElement('input');
		let name_data = document.createElement('input');

		input_id.name = "id";
		input_id.id = "input_id";

		input_data.name = 'data';
		input_data.id = "input_data";

		name_data.name = "name";
		name_data.id = "name_data";

		form.action = location.origin + '/pages/profile/set_profile/';
		form.id = "form_id";
		form.method = "POST";
		form.innerHTML = input_id.outerHTML + input_data.outerHTML + name_data.outerHTML;

		document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', form.outerHTML);
		document.getElementById('input_data').value = JSON.stringify(JSON.stringify(data));
		document.getElementById('name_data').value = document.getElementById('profile_name').value;

		if (get_id() != undefined)
		{
				document.getElementById('input_id').value = get_id();
		}
		else
		{
				document.getElementById('form_id').action = location.origin + '/pages/profile/create_portfolio/';
		}
		document.getElementById('form_id').submit();
}