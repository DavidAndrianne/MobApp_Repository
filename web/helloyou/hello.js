function helloClick(){
	var name = document.getElementById("nameInput").value;
	if(name != ""){ //If textfield is not empty
		alert("Bingo!");
		var text = "Hello " + name + ", have a nice day!";
		var textnode = document.createTextNode(text);
		var helloP = document.getElementById("helloTxt");
		while (helloP.firstChild) {
			helloP.removeChild(helloP.firstChild);
		}
		helloP.appendChild(textnode);
	}
	return false;
}