function div_wrap(content, name)
{
    return CE('div', content, 'mb-3');
}


function create_input(name, description)
{
		let element = document.createElement('input');
		element.type= 'text';
		element.classList.add(...['form-control', 'INPUT_FIELD']);
		element.name = name;
		element.title = description;
		element.placeholder = description;
		return element.outerHTML;
}


function create_textarea(name, description)
{
		let element = document.createElement('textarea');
		element.classList.add('INPUT_FIELD');
		element.name = name;
		element.title = description;
		element.placeholder = description;
		element.style.width='100%';
		return element.outerHTML;
}


function create_checkbox(name, description)
{
		let element = document.createElement('input');
		element.type= 'checkbox';
		element.classList.add('INPUT_FIELD');
		element.name = name;
		element.value = 0;
		return element.outerHTML+description+"<br />";
}


function create_div(id, classes='')
{
		let element = document.createElement('div');
		let arr_of_classes = classes.split(' ');
		if (classes != '')
				element.classList.add(...arr_of_classes);

		element.id = id;
		return element.outerHTML;
}


function create_input_row(template)
{
		const TEXT = 'text';
		const TEXTAREA = 'textarea';
		const CHECKBOX = 'checkbox';
		let output = '';

		for (let key in block_tempates[template][template])
		{
				if (field[template][key] == TEXT)
						output += create_input(key, mirror[template][1][key]);
				else if (field[template][key] == TEXTAREA)
						output += create_textarea(key, mirror[template][1][key]);
				else if (field[template][key] == CHECKBOX)
						output += create_checkbox(key, mirror[template][1][key]);
		}
		return output;
}


function delete_input_row(template)
{
		element = document.getElementById(template);
		if (element.children[element.children.length-1].constructor.name != 'HTMLLabelElement')
				element.children[element.children.length-1].remove();
}


function create_add_button(template)
{
		return "<button class='btn btn-secondary' onclick=print_input_row('"+template+"')>????????????????</button> ";
}


function create_delete_button(template)
{
		return "<button class='btn btn-warning' onclick=delete_input_row('"+template+"')>?????????????? ??????????????????</button>";
}


function create_letter()
{
	document.getElementById('content').insertAdjacentHTML('beforeEnd',"<div id='letter' class='hidden'>?????????????????????????????? ???????????? <br><textarea id=\"letter_inputs\" style=\"width:100%\"></textarea><br></div>");
}

function create_form()
{
		document.getElementById('content').insertAdjacentHTML('beforeEnd', "<div class='visible'><h4>?????? ???????????? ?? ???????????? ????????????????</h4><input class='form-control' type='text' id='profile_name' placeholder='?????? ???????????? ?? ????'></div>");
		create_table();
		for (let templates in block_tempates)
		{
				if (templates != 'title' && templates != 'table') //&& templates != 'simple_object')
				{
						for (let template in block_tempates[templates])
						{
								document.getElementById('content').insertAdjacentHTML('beforeEnd', create_div(template, 'hidden'));
								document.getElementById(template).insertAdjacentHTML('beforeEnd', create_div(template + '_inputs'));
								document.getElementById(template + '_inputs').innerHTML = '<label class="form-label"><h4>'+mirror[templates][0]["name"]+'</h4></label>';
								print_input_row(template);
						}

						document.getElementById(templates).insertAdjacentHTML('beforeEnd', "<div>"+mirror[templates][0]["recomendation"]+"</div>");
						if (!['profile_card', 'profile_title', 'about_me'].includes(templates))
						{
							 	document.getElementById(templates).insertAdjacentHTML('beforeEnd', create_add_button(templates));
							 	document.getElementById(templates).insertAdjacentHTML('beforeEnd', create_delete_button(templates+'_inputs'));
						}
						else
						{
								document.getElementById(templates).insertAdjacentHTML('beforeEnd', "<hr/>");
						}

				}
		}
		
		create_letter();
		
		document.getElementById('control').insertAdjacentHTML('beforeEnd', "<button class='btn btn-warning' onclick='previous()'>??????????</button> ");
		document.getElementById('control').insertAdjacentHTML('beforeEnd', "<button class='btn btn-warning' onclick='next()'>??????????</button>");

		document.getElementById('content').insertAdjacentHTML('beforeEnd', "<button class='btn btn-success hidden' onclick='grab_all()'>??????????????</button>");
}