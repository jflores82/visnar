// Menu Controls //
const menuBtn = document.getElementById("menuBtn");
const menuDiv = document.getElementById("menu");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const titleRetBtn = document.getElementById("titleRetBtn");
body.addEventListener("keydown", menuToggle);
menuBtn.addEventListener("click", menuBtnClick);
menuCloseBtn.addEventListener("click", menuClose);
titleRetBtn.addEventListener("click", titleRetClick);

// Audio Options //
const musicControl = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const sfxControl = document.getElementById("sfx");
const sfxBtn = document.getElementById("sfxBtn");
const voiceControl = document.getElementById("voice");
const voiceBtn = document.getElementById("voiceBtn");
musicBtn.addEventListener("click", musicToggle);
sfxBtn.addEventListener("click", sfxToggle);
voiceBtn.addEventListener("click", voiceToggle);


function menuBtnClick() {
	if(menuDiv.classList.contains("menu-show")) { 
		menuDiv.classList.remove("menu-show");
	} else { 
		menuDiv.classList.add("menu-show");
	}
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

function musicToggle() { 
	musicControl.muted = !musicControl.muted;
	if(musicControl.muted) { musicBtn.innerHTML = "Unmute Music"; } else { musicBtn.innerHTML = "Mute Music"; }
}

function sfxToggle() { 
	sfxControl.muted = !sfxControl.muted;
	if(sfxControl.muted) { sfxBtn.innerHTML = "Unmute SFX"; } else { sfxBtn.innerHTML = "Mute SFX"; }
}

function voiceToggle() { 
	voiceControl.muted = !voiceControl.muted;
	if(voiceControl.muted) { voiceBtn.innerHTML = "Unmute Voices"; } else { voiceBtn.innerHTML = "Mute Voices"; }
}

function titleRetClick() {
	location.href = "title.html";
}