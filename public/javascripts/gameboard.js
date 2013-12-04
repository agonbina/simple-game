define(function () {

	/**
	 * GameBoard constructor
	 * @constructor
	 */
	var GameBoard = function () {
		this.players = [];
		this.levels = [];
		this.currentLevel = 1;
	};
	GameBoard.prototype = {
		addPlayer: function (player) {
			this.players.push(player);
		},
		nextLevel: function () {
			this.currentLevel += 1;
		},
		checkAnswer: function (answer) {
			var level = this.levels[this.currentLevel],
				compareTo = level[answer.id];

		}
	};

	return GameBoard;

});