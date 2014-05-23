angular.module('encore.ui.rxFeedback', ['ngResource'])
.value('feedbackTypes', [
    {
        label: 'Software Bug',
        prompt: 'Bug Description',
        placeholder: 'Please be as descriptive as possible so we can track it down for you.'
    },
    {
        label: 'Incorrect Data',
        prompt: 'Problem Description',
        placeholder: 'Please be as descriptive as possible so we can figure it out for you.'
    },
    {
        label: 'Feature Request',
        prompt: 'Feature Description',
        placeholder: 'Please be as descriptive as possible so we can make your feature awesome.'
    },
    {
        label: 'Kudos',
        prompt: 'What made you happy?',
        placeholder: 'We love to hear that you\'re enjoying Encore! Tell us what you like, and what we can do ' +
            'to make it even better'
    }
])
.service('screenshotSvc', function () {
    return {
        capture: function () {
            return 'yeah';
        }
    };
})
.service('feedbackSvc', function ($resource) {
    return $resource('/api/feedback', {});
})
.directive('rxFeedback', function (feedbackTypes, $location, feedbackSvc, screenshotSvc) {
    return {
        restrict: 'E',
        templateUrl: 'templates/rxFeedback.html',
        link: function (scope) {
            scope.currentUrl = $location.url();
            scope.feedbackTypes = feedbackTypes;

            scope.sendFeedback = function (data) {
                // capture screenshot
                var screenshot = screenshotSvc.capture();

                // send data to feedback service
                feedbackSvc.post({
                    type: data.type,
                    description: data.feedback,
                    screenshot: screenshot
                });
            };
        }
    };
});