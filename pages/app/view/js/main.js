function card_wrap(inside)
{
		return CE('div', CE('div', inside, 'card-body'), 'card p-0')
}


function create_profile_title(obj)
{
		return 	CE('h1', obj.name, 'mb-0')+
						CE('h5', obj.profession, 'mt-0')+
						CE('p', obj.phrase, 'mt-2');
}


function create_profile_card(obj)
{
		return 	CE('div',
								CE_img(obj.image, '', '', '200') +
								CE('div', create_ul_profile(obj), 'mt-3'),
								'd-flex flex-column align-items-center text-center'
							);
}


function create_table(table)
{
		let head = "";
		let body = "";
		let output = "";

		for (let i=0; i<table.head.length; i++)
		{		
				if (i!=0)
				{
						head += td(table.head[i], 'text-center');
				}
				else
				{
						head += td(table.head[i]);
				}
		}
					//	CE('thead', tr(head), 'table-secondary');
		head = "<thead class='table-secondary' style='font-weight: 600;'>"+tr(head)+"</thead>";


		for (let j=0; j<table.body.length; j++)
		{
				output = "";
				for (let i=0; i<table.body[j].length; i++)
				{
						if (i!=0)
						{
								output += td(code(table.body[j][i]), 'text-center');
						}
						else
						{
								output += td(table.body[j][i]);
						}
				}
				body += tr(output);
		}
		body = CE('tbody', body);

		return CE('table', head + body, 'table table-striped table-bordered table-hover mb-0');
}

function create_object(key, obj)
{		
		let output = '';

		switch(key) 
		{
				case 'profile_title': output += create_profile_title(obj); 	break;
				case 'profile_card': 	output += create_profile_card(obj);		break;
				case 'table': 				output += create_table(obj);					break;
				case 'project_card': 	output += create_project_card(obj);		break;
				case 'education': 		output += create_education_card(obj);	break;
				case 'language': 			output += create_language_card(obj);	break;
				case 'title': 				output += CE('h4', obj.title, obj.classes); break;
				default: 							output += print_content(obj);
		}

		return output;
}


function print_content(obj)
{
		let output = '';
		for (let key in obj)
		{
			if (typeof(obj[key]) != 'object')
			{
					if (key == 'title')
					{
							output += CE('h4', obj[key]);
					}
					else
					{
							output += obj[key];	
					}
			}
			else
			{
					output += create_object(key, obj[key])
			}
		}
		return output;
}


function create_col(json)
{
		let output = '';
		for (let i=0; i<json['cols'].length; i++)
		{
			if (json['cols'][i]['extras']) 
			{
					let classes = ('col-md-'+json['cols'][i]['len']+' '+json['cols'][i]['classes']).trim();
					output += card_wrap(
																CE('div', create_row(json['cols'][i]), classes)
															);
					//output += card_wrap("<div class='col-md-"+json['cols'][i]['len']+" "+json['cols'][i]['classes']+"'>"+create_row(json['cols'][i])+"</div>");
			}
			else
			{
					let classes = ('col-md-'+json['cols'][i]['len']+' '+json['cols'][i]['classes']).trim();
					output += CE('div', create_row(json['cols'][i]), classes);
					//output += "<div class='col-md-"+json['cols'][i]['len']+" "+json['cols'][i]['classes']+"'>"+create_row(json['cols'][i])+"</div>";
			}
		}
		return output;
}


function create_row(json)
{
	let output = '';
	for (let i=0; i<json['rows'].length; i++)
	{
			if (("cols" in json['rows'][i]) == false)
			{
					output += print_content(json['rows'][i]);
			}
			else 
			{
					output += CE('div', create_col(json['rows'][i]), 'row p-2 pt-0');
					//output += "<div class='row p-2 pt-0'>"+create_col(json['rows'][i])+"</div>";
			}
	}
	return output;
}

function elem_from_json_creator()
{
		document.getElementById('target').innerHTML = create_row(json_obj);
}
elem_from_json_creator();