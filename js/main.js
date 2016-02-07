angular.module('bestApp', [])
.directive('mySum', function() {
 return {
  restrict: 'E',
  template:
  '<input type="number" ng-model="number_one">' +
	'<span>+</span>' +
	'<input type="number" ng-model="number_two">' +
	'<span>=</span>' +
	'<input type="number" value="{{number_one + number_two}}" disabled>'
  }
});