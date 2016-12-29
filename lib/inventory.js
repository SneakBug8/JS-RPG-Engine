// Init

var items=[]
var xp=0
var level=1
var data

// Items

function changeitem(slot,id) // Смена предмета в gui
{
	if (typeof id=="undefined")
	{
		id="1"
	}
document.getElementById('inv'+slot).innerHTML = '<a href="javascript:" onClick="invuse('+id+')"<image src="assets/graphics/items/'+id+'.gif"></a>';
}
function readinv(slot) // Чтение инвентаря
{
data=Cookies.get('slot'+slot); // => 'value'
   }

function getitem(id,type)
{
// ToDo: Написать чтение характеристик предметов
}

function writeinv(slot, item) // Запись в инвентарь
{
Cookies.set('slot'+slot, item);
}

function invinit()
{
	// Чтение всех ячеек инвентаря
	for (var i = 1; i < 10; i++) {
		readinv(mynickname,i)
		items[i]=data
		changeitem(i,data)
	}
}

$(document).ready(function() {
invinit();
});