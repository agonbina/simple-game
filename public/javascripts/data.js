define(function () {

	return {
		questions: [
			{
				id: 1,
				title: 'non-const static member variables must be defined outside of the class for them to be used',
				answer: true
			},
			{
				id: 2,
				title: 'int i = 1; i++; // The value of i is 1',
				answer: false
			}
		]
	}

});