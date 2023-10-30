function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/viewsmember.html',
        controller: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
                member: 'm'
        }
    };
}