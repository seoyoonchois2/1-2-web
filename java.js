window.onbeforeprint=function (e) {
	let logoDiv = document.getElementById("logoDiv");
	logoDiv.style.display = "block";
}
window.onafterprint=hideLogo;
function hideLogo() {
	let logoDiv = document.getElementById("logoDiv");
	logoDiv.style.display = "none";
}
