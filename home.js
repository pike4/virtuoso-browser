var hidden = true;

function toggleConnectForm()
{
	var connect = document.getElementById("connectForm");
	
	if(hidden)
	{
		showConnectForm();
	}
	
	else
	{
		hideConnectForm();
	}
}


function showConnectForm()
{
	var connect = document.getElementById("connectForm");
	connect.setAttribute("style", "animation-name: slowOpen; animation-duration: 0.5s; animation-fill-mode: forwards;");	
	hidden = false;
}

function hideConnectForm()
{
	var connect = document.getElementById("connectForm");
	connect.setAttribute("style", "animation-name: slowClose; animation-duration: 0.5s; animation-fill-mode: forwards;");
	hidden = true;
}