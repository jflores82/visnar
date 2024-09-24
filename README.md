# VisNar - Visual Narrative Engine / Framework
Lightweight engine/framework to develop visual narrative games in JavaScript.
Developed to help creating Visual Narrative (think visual novels, but no minigames, or choose-your-own-adventure text games, but with pictures) games, purely in JavaScript.

Coded by [tibonev](http://classicgames.com.br)

## Status
![commit](https://img.shields.io/github/last-commit/jflores82/visnar)

## Current Features
- Specific scenes for Title / Ending(s) / Gameover
- Each Scene supports multiple choices.
- Each line supports a character w/ image, in 3 positions.
- Each Scene can have a unique background.
- Each Scene can have unique music. 
- Game can be saved and loaded at any time.

## Usage 
Each scene resides inside one json file, which contains text array (each line spoken by a character), and a list of options after all the lines are said. 
Special json files are: title.json: which contains information about the title screen, game.json: which are general game settings and 001.json which is the very first scene your game will start in.

## Folder Structure
- scene json files go into /scenes/
- music mp3 files go into /mus/
- character portraits go into /img_char/
- background images go into /img_bg
- /assets is used to load the javascript and the css file
- index.html is the loader, which loads title.html which loads game.html

## Version History
Version 0.2 (24/09/2024)
- Fix Issue #4 - You can now save your game at any time, through the menu.
- Fix Issue #9 - Exit Game doesn't require confirmation to quit, now it shows a dialog for the user to confirm.
- Fix Issue #10 - Added basic SFX support
- Changed the look of the menu-button to be more visible.
- Fixed error of background image not showing correctly (changed css for the class)
- Added option to add crt filter to the game, using game.json

Version 0.1 (23/09/2024)
- Game always start with start.json and first scene must be named 001.json
- Added game settings files (configured through game.json)
- Fix Issue #1 - Added character position to scene.json
- Fix Issue #2 - Added a central character database in game (chars.json)
- Fix Issue #5 - Added title screen (configured through title.json)
- Fix Issue #5 - Added scene types to scene.json
- Fix Issue #7 - Added options to mute sounds (music, sfx and voice separated)
- Fix Issue #8 - Added menu button on the main game screen

Initial Release (20/09/2024)

### Copyright
VisNar was developed in September of 2024 by tibonev, inspired by the Spooktober VN Jam.
Feel free to use it and modify it. 
Also, any harm caused by misuse or otherwise of this software is of the sole responsability of the user.

Font used is Pixeloid, more information and license [here](https://ggbot.itch.io/pixeloid-font)