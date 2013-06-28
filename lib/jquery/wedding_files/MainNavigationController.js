function  MainNavigationController($scope) {

    $scope.id = 'fabiseNavigationBar';

    $scope.logo = 'FABISE';

    $scope.navigationOptions = [
        { href: '#theCouple', label: 'Bride+Groom'},
        { href: '#photos', label: 'Our Photos'},
        { href: '#bridalParty', label: 'Bridal Party'},
        { href: '#weddingInfo', label: 'Where/Where/How'},
        { href: '#gifts', label: 'Gifts'},
        { href: '#contact', label: 'Contact'}
    ];

};