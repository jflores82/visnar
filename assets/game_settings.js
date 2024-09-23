
async function loadSettings() {
	scenePath = "scenes/game.json";
	const resp = await fetch(scenePath);
    settings = await resp.json();
	    	
    document.title = settings.settings.name;
	if(settings.settings.crt_filter == "true") { 
		document.getElementById("#crt_filter").classList.add("crt-show");
	}
}

loadSettings();
