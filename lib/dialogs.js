var npcs=[[22,10,"trader",1],[22,15,"trader",3]]
var npcsbutt=[]
function checkdplace(addx, addy) {
	for(index = 0; index < npcs.length; index++) {
		if(coordx + addx == npcs[index][0] && coordy + addy == npcs[index][1]) {
			console.log(npcs[index][2]);
			return npcs[index][2];
		}
	}
	return ""
}
var shown=0
function checkdial(addx,addy) {
	var npc = checkdplace(addx,addy);
	if (npc!="" && shown==0) {
		calldial(npc)
		return false;
	}
}

function calldial(npc) {
document.getElementById('dialog').src="dialogs/"+npc;	
PopUpShow()
}

    $(document).ready(function(){
        //Скрыть PopUp при загрузке страницы    
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $("#popup1").show();
		shown=1
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $("#popup1").hide();
		shown=0
    }
	
function dialinit()
{
	for (var index = 0; index < npcs.length; ++index) {
    npcsbutt[index] = game.add.button((npcs[index][0]-1)*32, (npcs[index][1]-1)*32, npcs[index][3], actionOnClick, this, 2, 1, 0);
	}
}

function actionOnClick(){
	var d=checkdplace(0,0)
	if (d!=""){
	calldial(d)
	}

}