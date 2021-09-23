const TEXT = 'text';
const TEXTAREA = 'textarea';
const CHECKBOX = 'checkbox';
const field = 
{
    "profile_card" :
                    {
                        "image": TEXT,
                        "birthday": TEXT,
                        "city": TEXT,
                        "telephone": TEXT,
                        "email": TEXT,

                        "github": TEXT,
                        "git_first": CHECKBOX,
                        "git_not_include": TEXT
                        
                    },

    "profile_title" :
                    {
                        "name": TEXT,
                        "profession": TEXT,
                        "phrase": TEXTAREA
                    },
    "about_me": 
                    {
                        "content": TEXTAREA
                    },
    "education" : 
                    {
                        "period": TEXT,
                        "school": TEXT,
                        "specialist":TEXT
                    },

    "courses" : 
                    {
                        "period": TEXT,
                        "school": TEXT,
                        "specialist": TEXT
                    },

    "language" : 
                    {
                        "language": TEXT,
                        "level": TEXT,
                    },

    "project_card" : 
                    {
                        "name": TEXT,
                        "stargazers_count": CHECKBOX,
                        "description": TEXTAREA,
                        "title_star": TEXT,
                        "length": CHECKBOX,
                        "site_url": TEXT
                    },
                    
    "table":
                    {
                      "head": "Имя колонки",
                      "body": "Значение"
                    },

    "simple_object": 
                    {
                        "title": TEXT,
                        "content": TEXT,
                        "length": CHECKBOX
                    }
};