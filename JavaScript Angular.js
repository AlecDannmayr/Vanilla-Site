<!-- The ng-model Directive
With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.
--!>

<div ng-app="myApp" ng-controller="myCtrl">
  Name: <input ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
  $scope.name = "John Doe";
});
</script>


<!--The ng-model Directive
With the ng-model directive you can bind the value of an input field to a variable created in AngularJS.--1>

<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
Name: <input ng-model="name">
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "Alec Dannmayr";
});
</script>

<p>Use the ng-model directive to bind the value of the input field to a property made in the controller.</p>

</body>
</html>
