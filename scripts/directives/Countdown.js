angular.module('widgets', [])
    .directive('countdown', function() {

        return {

            restrict: 'E',

            template: '<div></div>',

            replace: true,

            link: function(scope, elem, attr) {

                function getTimeZoneOffset( ) {
                    var currentDate = new Date( );
                    var gmtOffset = currentDate.getTimezoneOffset( ) / 60;
                    return gmtOffset;
                }

                $("#" + attr.id).jCountdown({

                    timeText: attr.timeText,
                    timeZone: getTimeZoneOffset(),
                    style: attr.style,
                    color: attr.color,
                    width: attr.width,
                    textGroupSpace: 15,
                    textSpace: 0,
                    reflection: false,
                    reflectionOpacity: 10,
                    reflectionBlur: 0,
                    dayTextNumber: 3,
                    displayDay: true,
                    displayHour: true,
                    displayMinute: true,
                    displaySecond: true,
                    displayLabel: true,
                    onFinish: function() {
                        // TODO: Do something when countdown is over.
                    }

                });

            }

        };

    });