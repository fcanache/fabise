angular.module('gallery', [])
    .directive('carousel', function() {

    return {

        restrict: 'E',

        templateUrl: 'views/carousel.html',

        replace: true,

        //the link method does the work of setting the directive
        // up, things like bindings, jquery calls, etc are done in here
        link: function(scope, elem, attr) {

        }

    };

});