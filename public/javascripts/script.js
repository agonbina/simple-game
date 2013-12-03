$(document).ready(function () {

    /**
     * GameBoard constructor
     * @constructor
     */
    var GameBoard = function () {
        this.players = [];
        this.levels = {
            1: {
                1: {
                    q: '1 + 1 =',
                    a: 2
                },
                2: {
                    q: '2+2=',
                    a: 4
                }
            }
        };
        this.currentLevel = 1;
    };
    GameBoard.prototype = {
        addPlayer: function (player) {
            this.players.push(player);
        },
        nextLevel: function() {
            this.currentLevel += 1;
        },
        checkAnswer: function(answer) {
            var level = this.levels[this.currentLevel];

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
        image: "/images/icons/1_48.png",
        imageStretchToFit: true,
        density: 4,
        x: 2
        /*onKeyDown: function(e) {
            this.applyImpulse(200, 60);
        }*/
    });

    world.createEntity({
        name: "ground",
        shape: "square",
        type: "static",
        color: "rgb(0,100,0)",
        width: 20,
        height: .5,
        y: 12
    });
});