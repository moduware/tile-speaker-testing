
/** ================ Handlers == */
function nativeDataUpdateHandler(data) {	
	
	if(data.state=='pluggedIn') {
		document.getElementById('speakerStatus').textContent = "Connected";
	}
	else if(data.state=='pluggedOut') {
		document.getElementById('speakerStatus').textContent = "Disconnected";
	}
}
