angular.module('navigation', [])
    .directive('smartNavigationBar', function() {

    return {

        restrict: 'E',

        templateUrl: 'views/smart_navigation_bar.html',

        replace: true,

        //the link method does the work of setting the directive
        // up, things like bindings, jquery calls, etc are done in here
        link: function(scope, elem, attr) {

            $(elem).on('click', 'a', function(event) {
                event.preventDefault();

                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top + "px"
                });

            });

        }

    };

});