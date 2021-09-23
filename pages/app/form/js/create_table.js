function add_row_into_table()
{
		document.getElementById('table_add_button').insertAdjacentHTML('beforeBegin', create_table_row(mirror['table'][1]["body"]));
}


function add_col_into_table()
{
		table = document.getElementById('table_input');
		table.dataset.length++; 
		rows = table.getElementsByClassName('table_row');
		for (let i=0; i<rows.length; i++)
		{
			 rows[i].insertAdjacentHTML('beforeEnd', create_table_input(rows[i].children[0].name, rows[i].children[0].placeholder));
		}
}


function create_add_into_row_button()
{
		document.getElementById('table_input').insertAdjacentHTML('beforeEnd', "<button id='table_add_button'class='btn btn-primary' onclick=add_row_into_table()>Добавить строку</button> ");
}


function create_add_into_column_button()
{
		document.getElementById('table_input').insertAdjacentHTML('beforeEnd', "<button class='btn btn-primary' onclick=add_col_into_table()>Добавить колонку</button>");
}


function create_table_input(name, description)
{
		let element = document.createElement('input');
		element.type= 'text';
		element.name = name;
		element.title = description;
		element.placeholder = description;
		return element.outerHTML;
}


function create_table_row(name)
{
		let length = document.getElementById('table_input').dataset.length;
		return "<div class='table_row'>"+create_table_input(name, name).repeat(length)+"</div>";
}


function create_table()
{
		document.getElementById('content').insertAdjacentHTML('beforeEnd', create_div('table', 'hidden'));
		document.getElementById('table').insertAdjacentHTML('beforeEnd', create_div('table_input'));
		document.getElementById('table_input').dataset.length = 1;
		document.getElementById('table_input').insertAdjacentHTML('beforeEnd',"<h3>Навыки</h3>");
		document.getElementById('table_input').insertAdjacentHTML('beforeEnd', create_table_input('name', 'Имя таблицы'));
		create_add_into_row_button();
		create_add_into_column_button();
		
		document.getElementById('table_add_button').insertAdjacentHTML('beforeBegin', create_table_row(mirror['table'][1]["head"]));
		add_row_into_table();

		document.getElementById('table').insertAdjacentHTML('beforeEnd', "<div>"+mirror['table'][0]["recomendation"]+"</div><hr/>");
}