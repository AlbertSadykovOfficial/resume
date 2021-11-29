function redirect_to(way)
{
    location.href = location.origin + way;
}

function load_count(object)
{
	object.dataset.loadcount++;

	if (object.dataset.loadcount > 2)
		return false
	else
		return true
}

function change_src(object, way)
{
	if(load_count(object))
    	object.src = location.origin + way;
    else
    	object.src = ""; 
}


function copy_link(way)
{
	let textToCopy = location.origin + way;
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) 
    {
        alert('Ссылка скопирована');
        return navigator.clipboard.writeText(textToCopy);
    } 
    else 
    {
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => 
        {
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
            alert('Ссылка скопирована');
        });
    }
}