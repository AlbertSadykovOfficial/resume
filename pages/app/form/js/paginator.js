function next()
{
		let elems = document.getElementById('content');

		for (let i=0; i<elems.children.length; i++)
		{
				if (elems.children[i].classList.contains('visible'))
				{
						elems.children[i].classList.remove('visible');
						elems.children[i].classList.add('hidden');

						if (i !== elems.children.length - 1)
								elems.children[i+1].classList.add('visible');
						else
								elems.children[0].classList.add('visible');

						return true;
				}
		}
}


function previous()
{

		let elems = document.getElementById('content');

		for (let i=0; i<elems.children.length; i++)
		{
				if (elems.children[i].classList.contains('visible'))
				{
						elems.children[i].classList.remove('visible');
						elems.children[i].classList.add('hidden');

						if (i !== 0)
								elems.children[i-1].classList.add('visible');
						else
								elems.children[elems.children.length-1].classList.add('visible');

						return true;
				}
		}

}