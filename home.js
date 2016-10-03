function showConnectForm()
{
	console.log("AA");
	
	var connect = document.getElementById("connectForm");
	console.log(connect.toString());
	connect.setAttribute("style", "animation-name: slowOpen; animation-duration: 0.5s; animation-fill-mode: forwards;");
	
}

function hideConnectForm()
{
	var connect = document.getElementById("connectForm");
	
	connect.setAttribute("style", "animation-name: slowClose; animation-duration: 0.5s; animation-fill-mode: forwards;");
}