# VisNar - Visual Narrative Engine
Lightweight engine/framework to develop visual narrative games in JavaScript.
Developed to help in creating Visual Narrative (think visual novels, but no minigames, or choose-your-own-adventure text games, but with pictures) games, purely in JavaScript.

Coded by [tibonev](http://classicgames.com.br)

## Status
![commit](https://img.shields.io/github/last-commit/jflores82/visnar)

## Current Features
- Each Scene supports multiple choices.
- Each line supports a character w/ image.
- Each Scene can have a unique background.
- Each Scene can have unique music. 

## Todo
- Add option to position characters on screen
- Add central character sheet / master list.
- Add Voice over / Voice Acting support.
- Add save / load games.
- Add Title screen
- Add ending-type screen
- See how to transition between scenes
- Add SFX
- Add transition between pages
- Add documentation

## Usage 
Each scene resides inside one json file, which contains text array (each line spoken by a character), and a list of options after all the lines are said. 

## Folder Structure
- scene json files go into /scenes/
- music mp3 files go into /mus/
- character portraits go into /img_char/
- background images go into / img_bg
/assets is used to load the javascript and the css file
index.html is the main control file. 

### Copyright
Visnar was developed in September of 2024 by tibonev, inspired by the Spooktober VN Jam.
Feel free to use it and modify it. 
Also, any harm caused by misuse or otherwise of this software is of the sole responsability of the user.
