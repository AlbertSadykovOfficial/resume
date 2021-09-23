function create_table_by_data(x, y)
{
		let rows = document.getElementById('table').getElementsByClassName('table_row');
		let cols = rows[0].children.length;

		for (let i=0; i<=(x - rows.length); i++)
		{
				add_row_into_table();
		}
		add_row_into_table();
		for (let i=0; i<(y - cols); i++)
		{
				add_col_into_table();
		}
}


function bind_table(data)
{
		console.log(data);
		let table = [];
		document.getElementById('table').getElementsByTagName('input')[0].value = data[0];

		create_table_by_data(data[1][1].length+1, data[1][1][0].length);
		
		// Header
		for (let j=0; j<data[1][0].length; j++)
		{
				document.getElementById('table').getElementsByClassName('table_row')[0].getElementsByTagName('input')[j].value = data[1][0][j][0];
		}

		// Body
		for (let j=1; j<data[1][1].length+1; j++)
		{
				for (let i=0; i<data[1][1][j-1].length; i++)
				{		
						document.getElementById('table').getElementsByClassName('table_row')[j].getElementsByTagName('input')[i].value = data[1][1][j-1][i];
				}
		}
}


function bind_sets(template, length, data)
{
		let array = [];
		let count = 0;

		let elems = document.getElementById(template).getElementsByClassName('INPUT_FIELD');
		while (count < elems.length)
		{
			for (let i=0; i<length; i++)
			{
					elems[count].value = data[i];
					count++;
			}
		}
}


function bind_all()
{
		if (get_id() != undefined)
		{
				let data = JSON.parse(localStorage.getItem('portfolio'));
				for (let template in data)
				{
						if (data[template].length != 0)
						{
								if (!['title', 'table'].includes(template))
								{
										let length;
										if (!['letter'].includes(template))
												length = get_template_length(template);
										else
												length = 1;
										bind_sets(template, length, data[template][0]);
								} 
								else if (['table'].includes(template))
								{
										bind_table(data[template]);
								}
						}
						else
						{
								delete_input_row(template+'_inputs');
						}
				}
		}

		document.getElementById('profile_name').value = bind_name;
}
if (typeof(bind_json) != "undefined" && typeof(bind_name) != "undefined")
{
		bind_all();
}
