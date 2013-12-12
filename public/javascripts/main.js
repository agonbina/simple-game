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

        gameBoard.questions = questions;
        var firstQuestion = questions().first();

		// Create the timer
		var timerEl = $('#timer'),
			timer = new Timer(timerEl);

        timer.start();

        // Set up the form
        var quizForm = $('#quiz-form').form({
            answer: {
                identifier: 'answer',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Can\'t be empty'
                    }
                ]
            }
        }, {
            debug: false,
            inline: true,
            onSuccess: submitAnswer
        });

        function submitAnswer() {
            var answer = quizForm.form('get field', 'answer').val();
            console.log(answer);
        }

        // Set up a question
        $('#question').text(firstQuestion.title);
	});
});