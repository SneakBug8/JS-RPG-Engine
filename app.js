var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-area', {
    preload: preload,
    create: create,
    update: update
});
var REGISTER_ADR="http://www.etrt.ru/rpg/register.html"; // Write adress of registration page here
var client;
var SPRITESNUM=7
function preload() {
	// Index < num of sprites + 
	
	load()
    timer = window.setInterval(reload, 300)
	var layer = game.add.group();
}

var player;
var cursors;
var players=[]
var params=window.location.search
var mynickname=Cookies.get('mynickname'); // Reading nickname from Cookies
if (mynickname==null)
{
window.location = REGISTER_ADR;
}
// if (mynickname[nick]==null) { var mynickname=Math.floor(Math.random()*100) }
var coordx;
var coordy;

var moveX;
var moveY;

var phys=0
var worldsize=2048 // Размер карты в px
getlocvars("map0") // Стартовая локация
var mylocation
var napr

mysprite = Cookies.get('mysprite'); // => 'value'
if (mysprite==null)
{
	mysprite="0"
}


function create() {
    map = game.add.tilemap('test', 32, 32);
    map.addTilesetImage('tiles');
    layer = map.createLayer(0);
    layer.resizeWorld();	 
	game.world.setBounds(0, 0, worldsize, worldsize);
	// Коллизия по номерам тайлов в тайлсете.
	if (phys==1) {
		// Collision debug
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.gravity.y = 0;
		game.physics.p2.gravity.x = 0;
	}
    //  Add a sprite
	player = game.add.sprite(32, 32, mysprite);
	// Player's animation
	player.animations.add('down', [0, 1, 2], 10, true);
	player.animations.add('left', [3, 4, 5], 10, true);
    player.animations.add('right', [6,7,8], 10, true);
	player.animations.add('up', [9, 10, 11], 10, true); 
	// player.frame = 2;
	game.camera.follow(player);
	
	// Moving part
	keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	keyDown.onDown.add(movePlayerDown, this);
	
	keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP);
	keyUp.onDown.add(movePlayerUp, this);
	
	keyRight = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	keyRight.onDown.add(movePlayerRight, this);
	
	keyLeft = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
	keyLeft.onDown.add(movePlayerLeft, this);
	// Кончилась
	
	if (phys==1) {
		game.physics.p2.enable(player, true);
		player.body.collideWorldBounds = true;
	}
    text = game.add.text(0, 560, 'Alpha testing', {font: "32px Arial", fill: '#ffffff' });
	text.fixedToCamera = true;
	coordstext = game.add.text(700, 560, 'Hmm', {font: "18px Arial", fill: '#ffffff' });
	coordstext.fixedToCamera = true;
 	cursors = game.input.keyboard.createCursorKeys();
	// Загрузка последней локации, WIP
	/* if (typeof Cookies.get('lastloc') == "undefined")
	{}
	else
	{
		console.log(Cookies.get('lastloc'));
		goloc(Cookies.get('lastloc'),20,20);
	} */
	dialinit()
	
}

function movePlayerDown() {
	if(moveY == 0 && checkBlock(0,1)) {
		moveY = 1;
		player.animations.play('down');
		player.y += 32;
	}
}

function movePlayerUp() {
	if(moveY == 0 && checkBlock(0,-1)) {
		moveY = 1;
		player.animations.play('up');
		player.y -= 32;

	}
}

function movePlayerLeft() {
	if(moveX == 0 && checkBlock(-1,0)) {
		moveX = 1;
		player.animations.play('left');
		player.x -= 32;

	}
}

function movePlayerRight() {
	if(moveX == 0 && checkBlock(1,0)) {
		moveX = 1;
		player.animations.play('right');
		player.x += 32;

	}
}

function update() {
	// Called every frame
	game.debug.spriteInfo(player, 32, 32);
}

function reload()
{
	// Called 3 times per second.
	// Moving player
	player.animations.stop();
	
	if(cursors.left.isDown) {
		if (checkBlock(-1,0) && moveX == 0) {
			player.animations.play('left');
			player.x -= 32;
			playsound("step.wav")
			napr="1"
		}
	}
	else if (cursors.right.isDown) {
		if (checkBlock(1,0) && moveX == 0) {
			player.animations.play('right');
			player.x += 32;
playsound("step.wav")
napr="2"
		}
    }
	if (cursors.up.isDown) {
		if (checkBlock(0,-1) && moveY == 0) {
			player.animations.play('up');
			player.y -= 32;
			playsound("step.wav")
			napr="3"
		}
    }
	else if (cursors.down.isDown){
		if (checkBlock(0,1) && moveY == 0){
			player.animations.play('down');
			player.y += 32;
			playsound("step.wav")
			napr="4"
		}
    }
	
	checkphys();
	tpcheck();
	moveY = 0;
	moveX = 0;
	
	coordx = (player.x / 32) + 1;
    coordy = (player.y / 32) + 1;
	coordstext.text = 'x: ' + coordx + " y: " + coordy;
}

function checkphys()
{
	// Cheching player out of bounds
	if (player.x<0)
	{
		player.x+=32
	}
	if (player.x>worldsize)
	{
		player.x-=32
	}
	if (player.y<0)
	{
		player.y+=32
	}
	if (player.y>worldsize)
	{
		player.y-=32
	}
		
}


function checkBlock(addx, addy) {
// Static blocks checking
	for(index = 0; index < blocks.length; index++) {
		if(coordx + addx == blocks[index][0] && coordy + addy == blocks[index][1]) {
			return false;
		}
	}
	return true;
}
function tpcheck()
{
// Teleport checking
// tps[teleport x, teleport y,location,tpx,tpy]
	for(index = 0; index < tps.length; index++) 
	{
		if(coordx == tps[index][0] && coordy == tps[index][1]) 
		{
			goloc(tps[index][2],tps[index][3],tps[index][4])
		}
	}
	return true;
}


function goloc(loc, x,y) // Teleport between locs
{
	game.camera.shake(0.10, 1000);
	game.camera.flash(000000, 1000);
playsound("teleport.mp3")
	mylocation=loc
	Cookies.set('lastloc', loc);
	player.x=x*32
	player.y=y*32
	map.destroy()
	layer.destroy()
	map = game.add.tilemap(loc, 32, 32);
    map.addTilesetImage('tiles');
    layer = map.createLayer(0);
	getlocvars(loc)
	for (var index = 0; index < npcsbutt.length; ++index) {
    npcsbutt[index].destroy();
}
    layer.resizeWorld();
	layer.sendToBack()
	player.bringToTop() 	
}

function logout() // Deleting cookies and redirecting to login page
{
	Cookies.remove('mynickname');
	window.location = REGISTER_ADR
}
