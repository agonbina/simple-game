$(document).ready(function(){
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

});