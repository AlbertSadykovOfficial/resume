function trim_results(arr)
{
    for (let i=0; i<arr.length; i++)
    {
        arr[i] = arr[i].trim();
    }
    return arr;
}
function select_filelds(data, not_include_this_repos)
{
    second_line_projects = [];
    first_line_projects = [];
    not_include_this_repos = trim_results(not_include_this_repos.split(','));
    for (let i=0; i<data.length; i++)
    {
        if (not_include_this_repos.indexOf(data[i]['name']) == -1)
        {
          if (data[i]['stargazers_count'] == 0)
          {
              second_line_projects.push(
                                          { 'name': data[i]['name'],
                                            'description': data[i]['description'], 
                                            'stargazers_count': data[i]['stargazers_count'],
                                            'languages_url': data[i]['languages_url'],
                                            'length': '0',
                                            'site_url': data[i]['html_url'],
                                            'git_url': data[i]['html_url']
                                          });
          }
          else
          {
              first_line_projects.push(
                                          { 'name': data[i]['name'],
                                            'description': data[i]['description'], 
                                            'stargazers_count': data[i]['stargazers_count'],
                                            'languages_url': data[i]['languages_url'],
                                            'length': '0',
                                            'site_url': data[i]['html_url'],
                                            'git_url': data[i]['html_url']
                                          });
          }
        }
    }
    return first_line_projects.concat(second_line_projects);
}

function push_langs(data)
{
    let urls = [];
    for (let i=0; i<data.length; i++)
    {
        urls.push(data[i]['languages_url']);
    }

    Promise.allSettled(urls.map(url => fetch(url)))
      .then(results => 
      {
        results.forEach((result, num) => 
        {
          if (result.status == "fulfilled") 
          {
            result.value.json()
            .then(value=> 
            {
                document.getElementById(data[num]['name']).innerHTML = get_str(value);
            });
          }
          if (result.status == "rejected")
          {
            console.log(`${urls[num]}: ${result.reason}`);
          }
        });
      });
}


function get_str(lang)
{   
    let keys = []; 
    for (let key in lang)
    {
      keys.push(key);
    }

    let langs = '';
    for (let i=0; i<keys.length; i++)
    {
       langs += keys[i] + ', ';
    }

    return langs.substr(0, langs.length - 2);
}
/*
function load_data_from_github()
{
  //$.get( "https://api.github.com/users/AlbertSadykovOfficial/repos", function( data ) {
    
    //console.log(data);
    data = select_filelds(data_object);
    console.log(data);
    for (let i=0; i<data.length; i+=2)
    {        
        let element1 = create_project_card(data[i]);
        let element2 = create_project_card(data[i+1]);
        let output = '<div class="row gutters-sm mb-2">'+element1+element2+'</div>';
        document.getElementById('PROJECTS').insertAdjacentHTML('beforeBegin',output);
    }
    //push_langs(data);
 // });
}

load_data_from_github();*/