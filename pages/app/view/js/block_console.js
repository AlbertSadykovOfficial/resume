document.oncontextmenu = function () { return false }
document.addEventListener('keydown', 
	function (event) { 
		if (['F12',"Shift", "K", "C"].includes(event.key))  
		{ 
				event.preventDefault()
		}
	});