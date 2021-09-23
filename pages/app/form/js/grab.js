function grab_set()
{
		let elems = document.getElementsByTagName('input');
		let output = [];
		for (let i=0; i<elems.length; i++)
		{
				output.push(elems[i].value);
		}

		return output;
}

function grab_sets(template, length)
{
		let array = [];
		let count = 0;

		let elems = document.getElementById(template).getElementsByClassName('INPUT_FIELD');
		while (count < elems.length)
		{
			let row = [];
			for (let i=0; i<length; i++)
			{
					if (elems[count].type != 'checkbox')
						row.push(elems[count].value);
					else
						row.push(Number(elems[count].checked));
					count++;
			}
			array.push(row);
		}
		return array;
}

function grab_all()
{
		let output = {};
		for (let template in block_tempates)
		{
				if (template != 'title' && template != 'table' )//&& template != 'simple_object')
				{
						let length = get_template_length(template);	
						output[template] = grab_sets(template, length);
				}
		}
		output['table'] = grab_table();

		let outfit = '<br /><span style="display: inline-block; width:3%;"></span>';
		let letter = (document.getElementById('letter_inputs').value).replace(/(?:\r\n|\r|\n)/g, outfit); 
		output['letter'] = [[ '', '<div style=\"font-size: 115%;\">'+outfit+letter+"</div>" , '']];

		set_cookies(output);
}

function grab_table()
{
		let table = [];
		let header = document.getElementById('table').getElementsByTagName('input')[0].value;
		let rows = document.getElementById('table').getElementsByClassName('table_row');

		table.push([]);
		for (let i=0; i<rows[0].getElementsByTagName('input').length; i++)
		{
				table[0].push([rows[0].getElementsByTagName('input')[i].value]);
		}
		table.push([]);
		for (let j=1; j<rows.length; j++)
		{
				let row = [];
				for (let i=0; i<rows[j].getElementsByTagName('input').length; i++)
				{
						row.push(rows[j].getElementsByTagName('input')[i].value);		
				}
				table[1].push(row);
		}
		return [header, table];
}