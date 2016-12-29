<!DOCTYPE HTML>
<html>
    <head>
	<link rel="icon" type="image/vnd.microsoft.icon" href="favicon.ico">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.1.1.min.js"   integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="   crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/phaser/2.6.1/phaser.min.js"></script>
	<script type="text/javascript" src="lib/cookie.js"></script>
	<script type="text/javascript" src="lib/locvars.js"></script>
	<script type="text/javascript" src="lib/tabs.js"></script>
	<script type="text/javascript" src="lib/loader.js"></script>
	<script type="text/javascript" src="lib/dialogs.js"></script>
	<script type="text/javascript" src="https://cdn.rawgit.com/deepstreamIO/deepstream.io-client-js/master/dist/deepstream.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
	<link rel="stylesheet" type="text/css" href="css/game.css">
	<script type="text/javascript" src="lib/inventory.js"></script>
    </head>
    <body>
		<h1>The Rier Testing</h1>

		

		<table><tr>
		<td>
	
		<div id="game-area"></div>
		<td>
		<div id="wrapper">
			<div class="chat">
			<div class="tabs">
    <ul>
        <li>Inventory</li>
    </ul>
    <div>
        <div>
        <div>
		<center><table border="1" class="brd"><tr>
		<td class="inventory" id="inv1"></td>
		<td class="inventory" id="inv2"></td>
		<td class="inventory" id="inv3"></td></tr>
		<td class="inventory" id="inv4"></td>
		<td class="inventory" id="inv5"></td>
		<td class="inventory" id="inv6"></td></tr>
		<td class="inventory" id="inv7"></td>
		<td class="inventory" id="inv8"></td>
		<td class="inventory" id="inv9"></td>
		</tr></table></center>		
		</div>
    </div>            
</div> 
</div>
		</div>
		
		</td></tr></table>
<button type="button" class="btn btn-danger" onClick="logout()">Log out</button>
<a href="settings.html"><button type="button" class="btn btn-default">Settings</button></a>	
<a href="/donate.php"><button type="button" class="btn btn-success">Donate</button></a>		
<br>
    </body>
<? include('lib/dialog.php'); ?>


<!-- Yandex.Metrika informer -->
<a href="https://metrika.yandex.ru/stat/?id=28611071&amp;from=informer"
target="_blank" rel="nofollow"><img src="https://informer.yandex.ru/informer/28611071/3_0_FFFFFFFF_EFEFEFFF_0_uniques"
style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" /></a>
<!-- /Yandex.Metrika informer -->

<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter28611071 = new Ya.Metrika({
                    id:28611071,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/28611071" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
</html>