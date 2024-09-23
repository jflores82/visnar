// Visnar - Visual Narrative Engine //
// coded by tibonev (classicgames.com.br) //
// sources @ github.com/jflores82/visnar/ //

// Initial Scene //
const sceneFile = '001.json';

const char = document.getElementById("char");
const char_img = document.getElementById("char_img");
const bga = document.getElementById("bg");
const text = document.getElementById("text");
const option = document.getElementById("option");
const nextPageBtn = document.getElementById("nextPage");
const sceneMusic = document.getElementById("music");
const body = document.getElementById("body");
const option_container = document.getElementById("option_container");
const char_img_wrapper = document.getElementById("char-img-wrapper");

nextPageBtn.addEventListener("click", nextPage);

var currentPage;
var currentSong;
var totalPages;
var sceneType;


async function loadCharData() {
	scenePath = "scenes/chars.json";
	const resp = await fetch(scenePath);
    chars = await resp.json();
} 

async function loadSceneData(sceneData) {
	scenePath = "scenes/" + sceneData
	const resp = await fetch(scenePath);
    json = await resp.json();
	    	
    currentPage = 0;
    totalPages = json.texts.length;
    sceneType = json.scene.type;
            
    bga.style.backgroundImage = "url('img_bg/" + json.scene.background +".png')";
	nextPageBtn.innerHTML = "&gt;&nbsp;&gt;";

    if(sceneType == "ending" || sceneType == "gameover") { nextPageBtn.innerHTML = ""; }

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

    data_char = data.texts[currentPage].character;
    data_mood = data.texts[currentPage].mood;
    chars_img = chars[data_char][data_mood];
    position = data.texts[currentPage].position;
    char_img_pos_class(position);
    char_img.src = "img_char/" + chars_img;
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
        if(sceneType == "scene") { 
            nextPageBtn.innerHTML = "";
            renderOptions(json);
        }
        
    }
}

function option_btn_click() { 
    dest = this.getAttribute("dest");
    newSceneFile = dest + ".json";
    loadSceneData(newSceneFile);
}

function char_img_pos_class(position) { 
    char_img_wrapper.classList.remove("char-img-left");
    char_img_wrapper.classList.remove("char-img-right");
    char_img_wrapper.classList.remove("char-img-center");

    switch(position) {
        case "left":
            char_img_wrapper.classList.add("char-img-left");
        break;

        case "right":
            char_img_wrapper.classList.add("char-img-right");
        break;

        case "center":
            char_img_wrapper.classList.add("char-img-center");
    }
}


loadCharData();
loadSceneData(sceneFile);
    