function create_project_card(elem)
{
  let  output =
                    '<div class="card card-radius pb-0 px-3 pt-2 project-card" style="height:100%; border-radius: 10px;">'+
                       '<div class="card-body ">'+
                           '<div class="">'+
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
                                            //'<span class="vl mr-2 ml-0" style="font-weight:100"> | </span>'+ 
                                            '<span id="'+elem.name+'" style="vertical-align: middle;">'+elem.title_star+'</span>'+
                                        '</p>'+
                                   '</h6>'+
                               '</div>'+
                           '</div>'+
                           '<div class="pt-3" style="text-align:justify">'+
                              elem.description+
                          '</div>'+
                       '</div>'+
                       '<div class="card-footer bg-light px-0 bg-transparent">'+
                           '<div class="">'+
                             '<div class=" col-md-auto ">';

                             if (elem.git_url != undefined)
                             {
    output +=                    '<a href="' + elem.git_url + '" class="btn btn-outlined btn-black text-muted bg-transparent">'+
                                  '<img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"> '+
                                  '<small>GitHub</small>'+
                                '</a>';
                              }
                               
    output +=                   '<a href="' + elem.site_url + '" class="btn btn-outlined btn-black text-muted bg-transparent" data-wow-delay="0.7s">'+
                                  '<img src="https://img.icons8.com/metro/26/000000/link.png" width="17" height="17" id="plus"> '+
                                   '<small>Подробнее</small>'+
                                '</a>'+
                              '</div>'+
                           '</div>'+
                       '</div>'+
                   '</div>';
    return output;
}