var users;
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
	
	return sendHttpGetRequest("http://38.110.21.194:8081/DOWNLOAD", "", function(responseText){
		//console.log(responseText);
		
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
	
	var continuousRequest = setInterval(sendDownloadRequest, 100);
};