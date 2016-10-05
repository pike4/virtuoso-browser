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

function submitConnect()
{
	var ip = document.getElementById("IPBox");
	var port = document.getElementById("portBox");
	
	console.log(ip);
	console.log(port);
	
	var ipText = ip.value;
	var portText = port.value;
	
	var newURL = "./view.html"
	var errString = "Error:";
	
	if(!ipText)
	{
		errString += "\nPlease enter a valid IP";
	}
	
	if(!portText)
	{
		errString += "\nPlease enter a valid port";
	}
	
	if(!portText|| !ipText)
	{
		alert(errString);
	}
	
	else
	{
		newURL += "?ip=" + ipText + "&port=" + portText;
		window.location = newURL;
	}
}