function CE(tag, inside, classes='')
{
		let element = document.createElement(tag);
		let arr_of_classes = classes.split(' ');
		if (classes != '')
			element.classList.add(...arr_of_classes);

		element.innerHTML = inside;
		return element.outerHTML;
}


function CE_img(src, classes, alt, width)
{
		let element = document.createElement('img');
		element.classList.add(...classes);
		element.src = src;
		element.alt = alt;
		element.width = '200';
		return element.outerHTML;
}


function td(inside, classes='')
{
		let element = document.createElement('td');
		let arr_of_classes = classes.split(' ');
		
		if (classes != '')
			element.classList.add(...arr_of_classes);
		element.innerHTML = inside;
		return element.outerHTML;
}


function tr(inside, classes='')
{
		let element = document.createElement('tr');
		let arr_of_classes = classes.split(' ');
		if (classes != '')
			element.classList.add(...arr_of_classes);

		element.innerHTML = inside;
		return element.outerHTML;
}


function code(inside)
{
		let element = document.createElement('code');
		element.innerHTML = inside;
		return element.outerHTML;
}