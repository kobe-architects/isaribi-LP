window.onload = function() {
	setTimeout(() => {addClassList_logo_in()}, 500);
	setTimeout(() => {addClassList_logo_out()}, 2500);
	setTimeout(() => {addClassList()}, 3500);
}
function addClassList_logo_in(){
	const logo = document.getElementById('loading-logo');
	logo.style.visibility = "visible";
	logo.style.opacity = 1;
}
function addClassList_logo_out(){
	const logo = document.getElementById('loading-logo');
	logo.style.visibility = "hidden";
	logo.style.opacity = 0;
}
function addClassList(){
	const loader = document.getElementById('loading-wrapper');
	loader.classList.add('completed');
}
