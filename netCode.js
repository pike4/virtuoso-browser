var users;
var address;
var port;

function sendHttpGetRequest (url, outString, callback)
{
	var xmlHttp = new XMLHttpRequest();
	
	xmlHttp.onreadystatechange = function()
	{
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			return callback(xmlHttp.responseText);
		}
	}
	
	xmlHttp.open("GET", url, true);
	xmlHttp.send();
};

function sendDownloadRequest()
{
	
	return sendHttpGetRequest("http://" + address + ":" + port + "/DOWNLOAD", "", function(responseText){
		console.log(responseText);
		
		var DL_Data = responseText.toString().split(",");
		
		for(var i = 0; i < DL_Data.length/4; i++)
		{
			var name = DL_Data[4 * i];
			var dat = [DL_Data[(4*i) + 1], DL_Data[(4*i) + 2], DL_Data[(4*i) + 3]];
			users.set(name, dat);
		}
		//console.log(users);
	});
};

function startRepeatingGet()
{
	console.log("startRepeatingGet");
	var continuousRequest = setInterval(sendDownloadRequest, 100);
};

function getArgsFromURL()
{
	//Flags to verify that a valid port and IP were set before starting a repeaating get with garbage values
	var validAddress = false;
	var validPort = false;
	
	var url = window.location.href;
	var argList = url.split("?")[1];
	argList = argList.split("&");
	
	for(var i = 0; i < argList.length; i++)
	{
		var arg = argList[i].split("=");		
		if(arg[1] && typeof(arg[1]) !== undefined)
		{
			if(arg[0] === "ip")
			{
				address = arg[1];
				validIP = true;
				console.log("ip: " + address);
			}
			
			else if(arg[0] ===  "port")
			{
				port = arg[1];
				validPort = true;
				console.log("port: " + port);
			}
		}
	}
	
	if(validPort && validIP)
	{
		startRepeatingGet();
	}
}