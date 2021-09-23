let education;
let language;
let project_rows;
let profile_main;
let profile_title;

let courses;
let about_me;
let table;

let letter;


function transform(array_of_objects)
{
  let array_of_array = [];

  for(let i=0; i<array_of_objects.length; i++)
  {
      let arr = [];
      for (let key in array_of_objects[i])
      {
          if (key == 'languages_url')
          {
              arr.push("github");
          }
          else
          {
              arr.push(array_of_objects[i][key]);
          }
      }
      array_of_array.push(arr);
  }
  return array_of_array;
}

function load_data_from_github(data, user, not_include_this_repos)
{
  //$.get( "https://api.github.com/users/AlbertSadykovOfficial/repos", function( git_repos ) {
    
    // Отбираем нужные нам поля
    // Затем переводим массив объектов в массив массивов
    let git_repos = select_filelds(data_object, not_include_this_repos);
    git_repos = transform(git_repos);

    // 6 позиция массива указывает что выводить первым, 
    // Если 1 - Сначала git-репозитории, 
    // Если другое - сначала введенные вручную проекты
    if (data['profile_card'][0][6] == '1')
    {
        data['project_card'] = git_repos.concat(data['project_card']);
    }
    else
    {
        data['project_card'] = data['project_card'].concat(git_repos);
    }

    bind_data_from_storage(data);
    push_langs(select_filelds(data_object, not_include_this_repos));
 // });
}

function load()
{
    if (localStorage.getItem('portfolio') != null)
    {
        let data = JSON.parse(localStorage.getItem('portfolio'));

        if (!['', '-'].includes(data['profile_card'][0][5]))
        {
            load_data_from_github(data, data['profile_card'][0][5], data['profile_card'][0][7]);
        }
        else
        {
            bind_data_from_storage(data);
        }
    }
    else
    {
        bind_default_data();
    }
}
load();


/*
*  Заполнить данные из localStorage
*  
*  ! Внимание - опасная конструкция eval
*       databases,     AlbertSadykovOfficial,     System_Administration,     Data_Science,     Docker,     DJANGO_LESSONS,     Grokking-Algorithms,     Python,    php7,     WEB_LESSONS
*/
function bind_data_from_storage(data)
{
    education = create_block('education', {"title": 'Образование',"classes": "text-center"}, data['education']);
    courses = create_block('education', {"title": 'Курсы',"classes": "text-center"}, data['courses']);
    language = create_block('language', {"title": 'Знания языков',"classes": "text-center"}, data['language']);

    project_rows = create_block('project_card', '-', [data['project_card'], data['simple_object']]);

    profile_main = create_block('profile_card', '-', data['profile_card'][0]);
    profile_title = create_block('profile_title', '-', data['profile_title'][0]);
    about_me = create_block('about_me', 'Обо мне', data['about_me'][0]);
    table = create_block('table', data['table'][0], data['table'][1]);

    letter = create_block('simple_object', {"title": 'Сопроводительое письмо',"classes": "text-center"}, data['letter'][0]);

    for (let key in data)
    { 
        if (data[key].length == 0)
        {
            eval(key+"= [];");
        }
    }
}


/*
*  Звполнить данные по умолчанию
*
*
*/
function bind_default_data()
{
    education = create_block('education', {"title": 'Образование',"classes": "text-center"},
                                    [
                                        ["Текущий момент", "ИТМО", "Веб-технологии"],
                                        ["2021", "РГУ Нефти и Газа им. И.М. Губкина", "Приборостроение"],
                                        ["2021", "Военный Учебный Центр РГУ Нефти и Газа им. И.М. Губкина", "Начальник службы горючего воинской части (ВУС 241 000)"],
                                        ["2019", "ГБПОУ Ок \"Юго-Запад\"", "Монтажник радиоэлектронной аппаратуры и приборов 2 (второй) разряд"]

                                    ]);

    language = create_block('language', {"title": 'Знания языков',"classes": "text-center"},
                                    [
                                      ["Русский", "Родной"],
                                      ["Английский", "Pre-Intermediate (A2)"]
                                    ]);

    profile_main = create_block('profile_card', '-', ["imgs/avatar.jpg", "13.05.1999", "Санкт-Петербург", "+7 (977) 299 16 96", "albertsadykov@ro.ru","AlbertSadykovOfficial"]);
    profile_title = create_block('profile_title', '-', ["Альберт Садыков", "Разрботчик ПО", "Когда-то Римский форум был центром древнего мира, к нему сводились все главные дороги Европы, сегодня Форум располагается в интернете, и если вы спросите меня почему мои приложения часто связаны с интрнетом, то я отвечу вам небезызвестной фразой \"Все дороги ведут в Рим\""]);
    project_rows = create_block('project_card', '-',
                                    [
                                      ["Distributed_Shared_System", 1, "Шардированная распределенная ИИС мониторинга и управления технологическими процессами на нефтебазе (Дипломная работа)", "https://github.com/AlbertSadykovOfficial/Distributed_Shared_System", "PHP, C++, JavaScript, HTML, CSS", 1],
                                      ["JSQL", 1, "JS-библиотека для построения Базы Данных с SQL-подобным API на основе Google-таблиц и Google-скрипта. Бесплатно, Без СМС, но с регистрацией, т.к требует google-аккуаунт :) Всего 6 кБ !!! :yum:", "https://github.com/AlbertSadykovOfficial/JSQL", "JavaScript, HTML, CSS", 0],
                                      ["Distributed_Shared_System", 1, "Шардированная распределенная ИИС мониторинга и управления технологическими процессами на нефтебазе (Дипломная работа)", "https://github.com/AlbertSadykovOfficial/Distributed_Shared_System", "PHP, C++, JavaScript, HTML, CSS", 0],
                                      ["JSQL", 1, "JS-библиотека для построения Базы Данных с SQL-подобным API на основе Google-таблиц и Google-скрипта. Бесплатно, Без СМС, но с регистрацией, т.к требует google-аккуаунт :) Всего 6 кБ !!! :yum:", "https://github.com/AlbertSadykovOfficial/JSQL", "JavaScript, HTML, CSS", 0]
                                    ]);
    about_me = create_block('simple_object','Обо мне', ['За годы, проведенные в ВУЗе, мною были опробованы раличные виды деятельности, связанные с информационными технологиям. Не всё, что я пробовал, увлекло меня, но, к примеру, работа в Photoshop все еще остается со мной, хоть и не является моим основным направлением. На данный момент у меня сформировалось предтсавление о том, чем я хочу заниматься, эти делом оказалась - Разработка Программного Обеспечения']);
    table = create_block('table', 'Стек технологий',
                            [
                              [ // ПОЧЕМУ ТАК ?????????????
                                [ "Имя" ],[ "Технологии" ]
                              ],
                              [
                                [ "Сервер", "'Python (Django Framework) / PHP'" ],
                                [ "БД", "'PostgreSQL / MySQL'" ],
                                [ "Клиент", "'JS / HTML / CSS'" ],
                                [ "Дизайн", "'Photoshop / Figma / Blender'" ],
                                [ "Админ", "'BASH / Docker / Lua ( C++ )'" ]
                              ]
                            ]);

    courses = create_block('education', {"title": 'Курсы',"classes": "text-center"},
                                    [
                                      ["2018", "РГУ Нефти и Газа им. И.М. Губкина Курс в рамках клуба ITOG при поддержке компании KNIME", "JavaScript Junior"]
                                    ]);
}

