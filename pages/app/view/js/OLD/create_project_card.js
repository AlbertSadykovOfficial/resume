function create_project_card(elem)
{
    output =    '<div class="col-sm-6">'+
                    '<div class="card card-radius pt-2 active pb-0 px-3 mb-2" style="height:97%;">'+
                       '<div class="card-body ">'+
                           '<div class="row">'+
                               '<div class="col-12">'+
                                  '<h5 class="card-title "><b>'+ elem.name + '</b></h5>'+
                               '</div>'+
                               '<div class="col">'+
                                   '<h6 class="card-subtitle mb-2 text-muted">'+
                                       '<p class="card-text text-muted small ">';
                                          if (elem.stargazers_count)
                                          {
                                            output += '<img src="https://img.icons8.com/color/26/000000/christmas-star.png"" class="mr-1 " width="19" height="19" id="star"> '
                                          }
                                          else
                                          {
                                            output += '<img src="https://img.icons8.com/metro/26/000000/star.png" class="mr-1 " width="19" height="19" id="star"> ';
                                          }

    output +=                               '<span class="vl mr-2 ml-0"></span>'+ 
                                            '<span id="'+elem.name+'"> Python, JS, HTML, CSS</span>'+
                                        '</p>'+
                                   '</h6>'+
                               '</div>'+
                           '</div>'+
                           '<div class="pt-3">'+
                              elem.description+
                          '</div>'+
                       '</div>'+
                       '<div class="card-footer bg-white px-0 ">'+
                           '<div class="row">'+
                             '<div class=" col-md-auto ">'+
                                '<a href="' + elem.html_url + '" class="btn btn-outlined btn-black text-muted bg-transparent">'+
                                  '<img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"> '+
                                  '<small>GitHub</small>'+
                                '</a>'+
                                '<a href="#" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s">'+
                                  '<img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"> '+
                                   '<small>Подробнее</small>'+
                                '</a>'+
                              '</div>'+
                           '</div>'+
                       '</div>'+
                   '</div>'+
                '</div>';
        return output;
}