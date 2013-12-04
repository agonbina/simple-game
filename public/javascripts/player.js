/**
 * Definition for the Player module
 */
define(function () {

	var Player = function () {
		this.points = 0;
	};

	Player.prototype = {
		addPoints: function (pointsToAdd) {
			this.points += pointsToAdd;
		}
	};

	return Player;

});