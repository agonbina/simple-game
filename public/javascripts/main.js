require.config({
	baseUrl: 'javascripts',
	paths: {
		jQuery: 'vendor/jquery.min',
		domReady: 'vendor/domReady',
		boxbox: 'vendor/boxbox',
		boxbox2d: 'vendor/Box2dWeb-2.1.a.3',
		taffy: 'vendor/taffy-min'
	}
});

// Bootstrap the application
require(['domReady', 'gameboard', 'World', 'data', 'player', 'timer', 'taffy'], function (domReady, GameBoard, World, data, Player, Timer) {


	domReady(function () {

		var canvasElem = document.getElementById("game");
		World.setup(canvasElem);

		var gameBoard = new GameBoard(),
			questions = TAFFY(data.questions);

		// Create the timer
		var timerEl = $('#timer'),
			timer = new Timer(timerEl);

	});
});