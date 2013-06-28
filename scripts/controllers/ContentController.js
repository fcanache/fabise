function  ContentController($scope, $timeout) {

    $scope.logo = 'FABISE';

    $scope.pages = [
        { id: 'theCouple', source: 'views/pages/the_couple.html', fullScreenModeOn: true},
        { id: 'photos', source: 'views/pages/photos.html'},
        { id: 'bridalParty', source: 'views/pages/bridal_party.html'},
        { id: 'weddingInfo', source: 'views/pages/wedding_info.html'}
    ];

    // TODO: This is a hack.
    //       Figure out how to set the code below after
    //       all DOM is rendered.
    $timeout(function() {
        $('body').scrollspy({target: '#fabiseNavigationBar'});
    }, 10);

};