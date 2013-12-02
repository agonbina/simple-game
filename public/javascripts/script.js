$(document).ready(function () {

    /**
     * GameBoard constructor
     * @constructor
     */
    var GameBoard = function () {
        this.players = [];
    };
    GameBoard.prototype = {
        addPlayer: function (player) {
            this.players.push(player);
        }
    };

    /**
     * Player constructor
     */
    var Player = function () {
        this.points = 0;
    };
    Player.prototype = {
        addPoints: function (pointsToAdd) {
            this.points += pointsToAdd;
        }
    };

    /* Game */
    var game = new GameBoard(),
        player = new Player();

    game.addPlayer(player);
    player.addPoints(200);

    var canvasElem = document.getElementById("game"),
        world = boxbox.createWorld(canvasElem);

    world.createEntity({
        name: "player",
        shape: "circle",
        radius: 1,
        image: "pig.png",
        imageStretchToFit: true,
        density: 4,
        x: 2,
        onKeyDown: function(e) {
            this.applyImpulse(200, 60);
        }
    });
});