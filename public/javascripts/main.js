require.config({
	baseUrl: 'javascripts',
	paths: {
		jQuery: 'vendor/jquery.min',
		domReady: 'vendor/domReady',
		boxbox: 'vendor/boxbox',
		boxbox2d: 'vendor/Box2dWeb-2.1.a.3',
		TaffyDB: 'vendor/taffy-min'
	}
});

// Bootstrap the application
require(['jQuery', 'domReady', 'World', 'TaffyDB'], function ($, domReady, World) {


	domReady(function () {

		var canvasElem = document.getElementById("game");
		World.setup(canvasElem);


		var players = TAFFY([
			{ id: 1, name: 'Agon'},
			{ id: 2, name: 'Agon'},
			{ id: 3, name: 'Agon'},
			{ id: 4, name: 'Agon'}
		]);

		var agon = players({id:2});
		console.log(agon.name);

	});
});