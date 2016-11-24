describe('Routes', function () {
	var $state, state;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$state = $injector.get('$state');
		state = $state.get('settings');
	}));

	describe('Settings', function () {

		it('should have the correct URL', function () {
			expect(state.url).toEqual('/settings');

		});

		it('should use the correct template', function () {
			expect(state.templateUrl).toEqual('views/settings.html');
		});
	});
});
