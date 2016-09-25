function sendHttpGetRequest (url, outString, callback)
{
	var xmlHttp = new XMLHttpRequest();
	
	xmlHttp.onreadystatechange = function()
	{
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)
		{
			callback(xmlHttp.responseText);
		}
	}
	
	xmlHttp.open("GET", url, true);
	xmlHttp.send(outString);
};

function sendDownloadRequest()
{
	sendHttpGetRequest("http://38.110.21.194:8081", "DOWNLOAD", function(responseText){
		console.log(responseText);
	});
};

function startRepeatingGet()
{
	var continuousRequest = setInterval(sendDownloadRequest, 1000);
};