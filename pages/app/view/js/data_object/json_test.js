function create_column(col=12, rows=[], classes=[])
{
    let col_out = []; 
    if (typeof(col) != 'object')
    {
        col_out.push({
                      "len": col,
                      "classes": classes[0],
                      "rows": rows
                    }
        );
    }
    else
    {
        for (let i=0; i<col.length; i++)
        {
          if (rows[i] == undefined)
          {
              rows[i] = [];
          }
          col_out.push({
                        "len": col[i],
                        "classes": classes[i],
                        "rows": rows[i]
                      }
          );
        }
    }
    return {"cols": col_out};
}

function create_json()
{
    let obj = {
    "len": "12",
    "rows": [
            ]
    };

    obj["rows"].push(create_column([3,9],[ 
                                            [ profile_main ], 
                                            [ 
                                              create_column(12, [ profile_title ], ['corrector']),  
                                              create_column([5,7], [ [table], [about_me] ], ['corrector', ''])
                                            ]
                                          ]
                                  ));
    obj["rows"].push(create_column([3,9], [ 
                                            [ education, courses, language ],
                                            project_rows
                                          ]));
    obj["rows"].push(create_column(12, [ letter ], ['mail']));
    return obj;
}

let json_obj = create_json();