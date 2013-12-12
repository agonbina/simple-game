define(function () {

	/**
	 * GameBoard constructor
	 * @constructor
	 */
	var GameBoard = function () {
		this.questions = [];
		this.currentQuestionId = 1;
	};
	GameBoard.prototype = {
		nextQuestion: function () {
			this.currentQuestionId += 1;
		},
		checkAnswer: function (answer) {
			var level = this.levels[this.currentLevel],
				compareTo = level[answer.id];

		}
	};

	return GameBoard;

});