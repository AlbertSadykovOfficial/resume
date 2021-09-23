function create_language_card(elem)
{
	let output=	'<ul class="list-group list-group-flush">'+
          '<li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">'+
            '<p class="text-secondary mb-1">'+elem.language+'</p>'+'<p class="text-secondary mb-1">'+elem.level+'</p>'+
          '</li>'+
        '</ul>';

  return output;
}