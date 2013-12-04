define('World', ['boxbox2d', 'boxbox'], function () {

	var world,
		setup = function (canvasEl) {
			world = boxbox.createWorld(canvasEl);

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
		};

	return {
		setup: setup
	}

});