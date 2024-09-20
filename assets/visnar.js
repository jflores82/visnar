const sceneFile = 'test.json';

const char = document.getElementById("char");
const char_img = document.getElementById("char_img");
const bga = document.getElementById("bg");
const text = document.getElementById("text");
const option = document.getElementById("option");
const nextPageBtn = document.getElementById("nextPage");
const sceneMusic = document.getElementById("music");
const body = document.getElementById("body");
const menuDiv = document.getElementById("menu");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const option_container = document.getElementById("option_container");

nextPageBtn.addEventListener("click", nextPage);
body.addEventListener("keydown", menuToggle);
menuCloseBtn.addEventListener("click", menuClose);

var currentPage;
var currentSong;
var totalPages;

async function loadSceneData(sceneData) {
	scenePath = "scenes/" + sceneData
	const resp = await fetch(scenePath);
    json = await resp.json();
	    	
    currentPage = 0;
    totalPages = json.texts.length;
            
    bga.style.backgroundImage = "url('img_bg/" + json.scene.background +".png')";
	nextPageBtn.innerHTML = "&gt;&nbsp;&gt;";

	option_container.classList.remove("menu-show");
            
    if(json.scene.music) { 
        if(currentSong !== json.scene.music) {
            currentSong = json.scene.music;
            sceneMusic.src = "mus/" + json.scene.music + ".mp3";
            sceneMusic.play();
        }
    }
            
    renderPage(json);
}

function renderPage(data) {

    char.innerHTML = '';
    text.innerHTML = '';
    option.innerHTML = '';
                                  
    char_img.src = "img_char/" + data.texts[currentPage].char_img;
    char.innerHTML = data.texts[currentPage].character;
    text.innerHTML = data.texts[currentPage].text;
            
}

function renderOptions(data) {
    var op;

	option_container.classList.add("menu-show");

    for(i = 0; i < data.options.length; i++) { 
        op = 'op' + i;
        option.innerHTML += '<button class="option_btn" dest ="' + data.options[i].dest +'">' + data.options[i].text + '</button>&nbsp;&nbsp;';
    }

    var option_btns = document.getElementsByClassName("option_btn");
    for (var i = 0; i < option_btns.length; i++) {
        option_btns[i].addEventListener('click', option_btn_click, false);
    }
}

function nextPage() { 
    currentPage++;
    if(currentPage < totalPages) { 
        renderPage(json);
    }
    if(currentPage == totalPages) {
		nextPageBtn.innerHTML = "";
        renderOptions(json);
    }
}

function option_btn_click() { 
    dest = this.getAttribute("dest");
    newSceneFile = dest + ".json";
    loadSceneData(newSceneFile);
}

function menuToggle(e) {
	if(e.code == "Escape") { 
		if(menuDiv.classList.contains("menu-show")) { 
			menuDiv.classList.remove("menu-show");
		} else { 
			menuDiv.classList.add("menu-show");
		}
	}
}

function menuClose() { 
	if(menuDiv.classList.contains("menu-show")) { 
		menuDiv.classList.remove("menu-show");
	}
}

loadSceneData(sceneFile);
    