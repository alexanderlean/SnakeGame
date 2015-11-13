 var img = new Image();

 function drawPlayerPawn() {

     img.onload = function () {
         context.drawImage(img, 0, 0);
     }
     img.src = "../_assets/Player/playerobject.svg";
 }

 main_game.controller("PlayerController", function ($scope) {
     var _name = 'Costea';
     $scope.user = {
         name: function (newName) {
             return arguments.length ? (_name = newName) : _name;
         }
     };
 });

 $(window).on("load", function () {
     drawPlayerPawn();
 })