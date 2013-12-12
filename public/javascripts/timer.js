define(function () {

	var Timer = function (timerEl) {
		this.secondsElapsed = 0;
		this.running = false;

		// Will be used to store the interval id for clearing the tick 'on demand'
		this.ticker = undefined;
		this.timerEl = timerEl;
	};

	Timer.prototype = {

		tick: function () {
			var timer = this;

			timer.secondsElapsed +=1;
			timer.timerEl.text(timer.secondsElapsed);
            $(timer.timerEl).transition('pulse');
			return setInterval(function () {
				timer.secondsElapsed += 1;
				timer.timerEl.text(timer.secondsElapsed);
                $(timer.timerEl).transition('pulse');
			}, 1000);
		},

		start: function () {
			this.running = true;
			this.ticker = this.tick();
		},

		stop: function () {
			var timer = this;

			if (timer.running) {
				clearInterval(timer.ticker);
			} else {
				console.log('Timer is not running!');
			}
		},

		reset: function () {
			this.running = false;
			this.secondsElapsed = 0;
		},

		rewind: function (seconds) {
			var timer = this;

			if (timer.running) {
				timer.secondsElapsed -= seconds;
			} else {
				console.log('Timer is not running!');
			}
		}
	};

	return Timer;

});