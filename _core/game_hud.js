function drawIntroText() {
    var img = new Image();
    img.onload = function () {
        context.drawImage(img, 100, 200);
    }
    img.src = "../_assets/HUD/Menu/intro.svg";
}