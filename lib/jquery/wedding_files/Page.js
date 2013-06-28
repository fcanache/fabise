angular.module('content', [])
    .directive('page', function($http, $compile, $window) {

        function getComputedStyle (element, styleProp) {
            if (element.currentStyle) {
                return element.currentStyle[styleProp];
            } else if ($window.getComputedStyle) {
                return $window.getComputedStyle(element,null).getPropertyValue(styleProp);
            }
            return '';
        };

        return {

            restrict: 'E',

            templateUrl: 'views/page.html',

            replace: true,

            link: function(scope, elem, attr) {

                $http({method: 'GET', url: scope.page.source})
                    .success(function(data, status, headers, config) {

                        elem.html(data);
                        $compile(elem.contents())(scope);

                    });

                function applyFullScreenMode() {

                    if (scope.page.fullScreenModeOn) {
                        $(elem).height($window.innerHeight);
                    }

                }

                angular.element($window).bind('resize', function(){
                    scope.$apply(function() {
                        applyFullScreenMode();
                    });
                });

                applyFullScreenMode();

            }

        };

    });