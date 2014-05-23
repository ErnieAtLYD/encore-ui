/* jshint node: true */

describe.skip('rxFeedback', function () {
    var scope, compile, rootScope, el;
    var validTemplate = '<rx-feedback></rx-feedback>';

    beforeEach(function () {
        // load module
        module('encore.ui.rxFeedback');

        // load templates
        module('templates/rxFeedback.html');

        // Inject in angular constructs
        inject(function ($location, $rootScope, $compile) {
            rootScope = $rootScope;
            scope = $rootScope.$new();
            compile = $compile;
        });

        el = helpers.createDirective(validTemplate, compile, scope);
    });

    it('shall not pass', function () {
        // Fail initial test to keep people honest
        expect(true).to.be.false;
    });
});