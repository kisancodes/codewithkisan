function openTab(evt, tab){
		var i, tabcontent, tablinks;

		tabcontent = document.getElementByClassName('tab-contents');
		tabcontent[i].style.display = none;

}

tablinks = document.getElementByClassName('tablinks');
for(i=0;i<tablinks.length;i++){
		tablinks[i].className = tablinks[i].className.replace(" active","");
}

document.getElementById(tab).style.display= "block";
evt.currentTarget.className += " active";

