function reposition2()
{
		let A4_height = (1/0.70707) * document.getElementById('target').offsetWidth;
		let current_page = A4_height;

		let elems = document.getElementById('target').children[1].children[1].getElementsByClassName('card');
		for (let i=0; i<elems.length; i++)
		{
				if (elems[i].parentNode.offsetTop + elems[i].parentNode.offsetHeight > current_page)
				{
						let offset = current_page - elems[i].parentNode.offsetTop + 30;//elems[i].parentNode.offsetTop + elems[i].parentNode.offsetHeight - current_page;
						elems[i].parentNode.style.marginTop = offset + 'px';
						elems[i+1].parentNode.style.marginTop = offset + 'px';
						current_page = current_page + A4_height;
						console.log(current_page - A4_height,current_page);
				}
		}



		reposition_mail(current_page);
}

function reposition()
{
		let current_page =  Math.max(
																	reposition_card(document.getElementById('target').children[1].children[0].getElementsByClassName('card')),
																	reposition_card(document.getElementById('target').children[1].children[1].getElementsByClassName('card'), true)
																);
		reposition_mail(current_page);
}

function reposition_card(elems, paired = false)
{
		let A4_height = (1/0.70707) * document.getElementById('target').offsetWidth;
		let current_page = A4_height;

		for (let i=0; i<elems.length; i++)
		{
				if (elems[i].parentNode.offsetTop + elems[i].parentNode.offsetHeight > current_page)
				{
						let offset = current_page - elems[i].parentNode.offsetTop + 30;//elems[i].parentNode.offsetTop + elems[i].parentNode.offsetHeight - current_page;
						elems[i].parentNode.style.marginTop = offset + 'px';
						if (paired)
						{
								elems[i+1].parentNode.style.marginTop = offset + 'px';
						}
						current_page = current_page + A4_height;
				}
		}

		return current_page;
}


function reposition_mail(current_page)
{
		let A4_height = (1/0.70707) * document.getElementById('target').offsetWidth;

		let elem = document.getElementsByClassName('mail')[0].getElementsByClassName('card')[0];

		let offset = (current_page - elem.offsetTop + 150);
		elem.parentNode.style.marginTop = offset + 'px';
}