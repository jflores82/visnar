const bga = document.getElementById("bg");
		const logo = document.getElementById("title_img");
		const startBtn = document.getElementById("startBtn");
		const loadBtn = document.getElementById("loadBtn");

		startBtn.addEventListener("click", startGame);
		loadBtn.addEventListener("click", loadGame);

		async function loadTitleScreen() {
			scenePath = "scenes/title.json";
			const resp = await fetch(scenePath);
    		json = await resp.json();
	    	    		
    		bga.style.backgroundImage = "url('img_bg/" + json.scene.background + ".png')";
			logo.src = "img_bg/" + json.scene.logo + ".png";
			            
    		if(json.scene.music) { 
        		if(currentSong !== json.scene.music) {
            		currentSong = json.scene.music;
            		sceneMusic.src = "mus/" + json.scene.music + ".mp3";
            		sceneMusic.play();
        		}
    		}
		}

		function checkLoad() {
			if(localStorage.savedgame == "1") { document.getElementById("loadBtn").style.display = "initial"; }
		}

		function startGame() { 
			location.href = "game.html";
		}

		function loadGame() { 
			location.href= "game.html?load=1";
		}
		
		checkLoad();
		loadTitleScreen();