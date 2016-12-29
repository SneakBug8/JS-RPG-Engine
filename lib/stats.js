// Levels
var xp=0
var level=0

function addxp(num)
{
	xp=xp+num
	if (xp>level*100)
	{
		level=level+1
		writelevel(level)
		xp=xp-level*100
	}
	writexp(xp)
}

function levelinit()
{
	readlevel()
	level=data
	console.log("Level: "+level)
	readxp()
	xp=data
	console.log("Xp: "+xp)
}


function writelevel(cont)
{
	var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   return xhttp.responseText;
   }
}
xhttp.open("GET","lib/writelevels.php?nick="+mynickname+"&type=level&cont="+cont,false);
xhttp.send();
}

function writexp(cont)
{
	var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   return xhttp.responseText;
   }
}
xhttp.open("GET","lib/writelevels.php?nick="+mynickname+"&type=xp&cont="+cont,false);
xhttp.send();
}

function readlevel()
{
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   data= xhttp.responseText;
   }
}
xhttp.open("GET","lib/readlevel.php?nickname="+mynickname+"&type=level",false);
xhttp.send();
}
function readxp()
{
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   data= xhttp.responseText;
   }
}
xhttp.open("GET","lib/readlevel.php?nickname="+mynickname+"&type=xp",false);
xhttp.send();
}