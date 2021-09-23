function clone_object(obj) 
{
    const clone = {};
    
    for (const i in obj)
    {
        if (obj[i] instanceof Object) 
        {
            clone[i] = clone_object(obj[i]);
            continue;
        }
        clone[i] = obj[i];
    }
    return clone;
}


function get_structure(type, data)
{
    let template_obj;

    if (!(type in block_tempates))
    {
        type = 'simple_object';
    }

    template_obj = clone_object(block_tempates[type]);

    let i = 0;
    for (let key in template_obj[type])
    {
        template_obj[type][key] = data[i];
        i++;
    }

    return template_obj;
}


function col_wrap(len=12, rows=[])
{
    return {
              "cols": 
              [
                  {
                    "len": len,
                    "extras": "card_wrap",
                    "rows": rows
                  }
              ]
           }
}


function multi_col(lens, cols, classes)
{
    let arr = [];
    for (let i=0; i<lens.length; i++)
    {
        arr.push(
                  {
                    "len": lens[i],
                    "classes": classes,
                    "rows": [cols[i]]
                  }
                );
    }

    return {
              "cols": arr
           }

}


function multi_block(type,data)
{
    let block_content = [];
    for (let i=0; i<data.length; i++)
    {
        block_content.push( get_structure(type, data[i]) );
    }

    return block_content;
}


function get_block_length(len)
{
    if (len != 0)
    {
        len=1;
    }

    return 6 + 6*len;
}

// Аккуратно !!! Тут длина задается через индекс массива
function project_block(data, data2)
{
    let block_content = [];
    let rows = [];
    let cols_len = [];

    for (let i=0; i<data2.length; i++)
    {
        rows.push(col_wrap(12, [get_structure('simple_object', data2[i])]));
        cols_len.push(get_block_length(data2[i][2]));
    }

    for (let i=0; i<data.length; i++)
    {
        rows.push(get_structure('project_card', data[i]));
        cols_len.push(get_block_length(data[i][4])); 
    }
    
    block_content.push(multi_col(cols_len, rows, "corrector pb-2"));
    return block_content;
}

function create_block(type, title, data)
{
    let block_content = [];

    if (typeof(title) == "object")
    {
         block_content.push(get_structure('title', [title.title, title.classes]));
    }
    else
    {
        if (title != '-') 
        {
            block_content.push(get_structure('title', [title, '']));
        }      
    }


    if (['education','language'].includes(type))
    {
        block_content = block_content.concat( multi_block(type, data) );
    }
    else if (['project_card'].includes(type))
    {
        return project_block(data[0],data[1]);
    }
    else
    {
        block_content.push( get_structure(type, data) );
    }

    return col_wrap(12, block_content);
}