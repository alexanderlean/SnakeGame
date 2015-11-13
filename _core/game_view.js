var canvas = document.getElementById("game_background_layer");
var canvas_ui = document.getElementById("game_ui_layer");
var canvas_viewport = document.getElementById("game_viewport_layer");
var context = canvas.getContext('2d');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

/*
 *   HUD MVS Elements
 */

var svg = document.querySelector('svg');

function setCanvasSize() {

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    canvas_ui.width = windowWidth;
    canvas_ui.height = windowHeight;

    canvas_viewport.width = windowWidth;
    canvas_viewport.height = windowHeight;

    //    /*Canvas Background Sizes*/
    //    canvas.style.width = windowWidth + "px";
    //    canvas.style.height = windowHeight + "px";
    //
    //    /*Canvas canvas_ui Sizes*/
    //    canvas_ui.style.width = windowWidth + "px";
    //    canvas_ui.style.height = windowHeight + "px";
    //    
    //    /*Canvas canvas_ui Sizes*/
    //    canvas_viewport.style.width = windowWidth + "px";
    //    canvas_viewport.style.height = windowHeight + "px";
}

function setCanvasbackground() {
    canvas.style.backgroundColor = "#c9eee0";
}