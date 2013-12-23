function SimpleCrud($scope) {
    $scope.items = [
        {
            name: 'default'
        }
    ];

    $scope.add = function() {
        if (!$scope.itemName) {
            $scope.message = 'input some words';
            return;
        }

        $scope.message = '';
        $scope.items.push(
            {
                name: $scope.itemName
            }
        );
        $scope.itemName = '';
    };

    $scope.inlineEdit = function($event) {
        var element = $event.target;
        element.style.display = 'none';
        $event.target.nextElementSibling.style.display = '';
    };

    $scope.commit = function($event) {
        if ($event.keyCode === 13) {
            var textElement = $event.target;
            textElement.style.display = 'none';
            textElement.previousElementSibling.style.display = '';
        }
    };

    $scope.remove = function($event) {
        $event.preventDefault();
        $scope.items.splice(this.$index, 1);
        $event.target.parentNode.remove();
    };
}
