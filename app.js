var main_game = angular.module('app_snake_game', []);

var GameStates = [
    'Intro',
    'Authorization',
    'Lobby',
    'Game',
    'Pause',
    'Finish'
];

main_game.controller('snake_game_controller', function($scope){
    $scope.INTRO_TEXT_WELCOME = 'Welcome to Arslor Online';
    
    var canvas = document.getElementById("game_viewport_layer");
    var context = canvas.getContext('2d');
    
})

