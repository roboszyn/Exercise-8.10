var buttons = document.getElementsByClassName('button');

console.log(buttons);

for(var i=0; i < buttons.length; i++) {
	var buttonsInnerText = buttons[i].innerText;
	alert(buttonsInnerText);
}