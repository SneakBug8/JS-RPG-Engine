function register()
{
	var nick=document.getElementById('nickname').value
	var pass=document.getElementById('password').value
	if (pass=="" || nick=="") {
		document.getElementById("alarm").innerHTML="EMPTY LOGIN OR PASSWORD"
		return 0;
	}
writereg(nick,pass)
createinv(nick)
Cookies.set('mynickname', nick);
window.location = "http://www.etrt.ru/rpg";
}
var key
function login()
{
	var nick=document.getElementById('nickname').value
	var pass=document.getElementById('password').value
	if (nick=="" || pass=="")
	{
		document.getElementById("alarm").innerHTML="EMPTY LOGIN OR PASSWORD"
		return true;
	}
	readreg(nick,pass)
	console.log(key)
	if (key==1)
	{
	Cookies.set('mynickname', document.getElementById('nickname').value);
	window.location = "http://www.etrt.ru/game";
	}
	else
	{
document.getElementById("alarm").innerHTML="WRONG LOGIN OR PASSWORD"
	}
}

function writereg(nick, pass)
{
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   data = xhttp.responseText;
   }
}
xhttp.open("GET","lib/register.php?nick="+nick+"&pass="+pass,false);
xhttp.send();
}
function readreg(nick,pass)
{
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   var data = xhttp.responseText;
	   if (data=="1") {
		   key=1
	   }
	   else
	   {
		   key=0
	}

   }
}
xhttp.open("GET","lib/login.php?nick="+nick+"&pass="+pass,false);
xhttp.send();
}
function createinv(nick)
{
var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange = function () {
   if (xhttp.readyState==4 && xhttp.status==200) {
	   var data = xhttp.responseText;
	   console.log("Inv created")
   }
}
xhttp.open("GET","lib/createinv.php?nick="+nick,false);
xhttp.send();
}