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
