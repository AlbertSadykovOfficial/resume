const EMPTY_INTEGER = 0;
const EMPTY_STRING = "";
const EMPTY_ARRAY = [];

/*
    Аккуратно с порядком расположения полей,
    они влияют на конечный резлуьтат отображения,
    так как данные хранятся в массивах
*/
const block_tempates = 
{
    "table":
                      {
                        "table":
                                {
                                  "head": EMPTY_ARRAY,
                                  "body": [ EMPTY_ARRAY ]
                                }
                      },
    "title":
                      {
                        'title': {
                                    'title': EMPTY_STRING,
                                    'classes': EMPTY_STRING
                                 }
                      },
    "profile_card":
                      {
                        "profile_card" : 
                                        {
                                            "image": EMPTY_STRING,
                                            "birthday": EMPTY_STRING,
                                            "city": EMPTY_STRING,
                                            "telephone": EMPTY_STRING,
                                            "email": EMPTY_STRING,
                                            
                                            "github": EMPTY_STRING,
                                            "git_first": EMPTY_INTEGER,
                                            "git_not_include": EMPTY_STRING
                                        }
                      },
    "profile_title":
                      {
                        "profile_title" : 
                                        {
                                            "name": EMPTY_STRING,
                                            "profession": EMPTY_STRING,
                                            "phrase": EMPTY_STRING
                                        }
                      },
    "about_me": 
                      {
                        "about_me":
                                          {
                                            "content": EMPTY_STRING
                                          }
                      },
    "education":  
                      {
                        "education" : 
                                    {
                                        "period": EMPTY_STRING,
                                        "school": EMPTY_STRING,
                                        "specialist": EMPTY_STRING
                                    }
                      },
    "courses":  
                      {
                        "courses" : 
                                    {
                                        "period": EMPTY_STRING,
                                        "school": EMPTY_STRING,
                                        "specialist": EMPTY_STRING
                                    }
                      },
    "language": 
                      {
                        "language" : 
                                    {
                                        "language": EMPTY_STRING,
                                        "level": EMPTY_STRING
                                    }
                      },
    "simple_object": 
                      {
                        "simple_object":
                                          {
                                            "title": EMPTY_STRING,
                                            "content": EMPTY_STRING,
                                            "length": EMPTY_INTEGER
                                          }
                      },
    "project_card":
                      {
                        "project_card" : 
                                    {
                                        "name": EMPTY_STRING,
                                        "description": EMPTY_STRING,
                                        "title_star": EMPTY_STRING,
                                        "stargazers_count": EMPTY_INTEGER,
                                        "length": EMPTY_INTEGER,
                                        "site_url": EMPTY_STRING,
                                        "git_url": EMPTY_STRING
                                    }
                      }
};