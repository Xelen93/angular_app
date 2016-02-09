angular.module('bestApp', ['ngRoute'])

 .controller('MainController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 })

 .controller('ChapterController', function($scope, $routeParams) {
     $scope.name = "ChapterController";
     $scope.params = $routeParams;
 })

.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/:bookId/x/:chapterId', {
    template:
  '<input type="text" ng-model="params.bookId" value="{{params.bookId}}">' +
	'<span>+</span>' +
	'<input type="text" ng-model="params.chapterId" value="{{params.chapterId}}">' +
	'<span>=</span>' +
	'<input type="text" value="{{(params.bookId-0) + (params.chapterId-0)}}" disabled>',
	controller: 'ChapterController'
  })
  .when('/', {
   template:
  '<input type="text" ng-model="params.bookId" value="{{params.bookId}}">' +
  '<span>+</span>' +
  '<input type="text" ng-model="params.chapterId" value="{{params.chapterId}}">' +
  '<span>=</span>' +
  '<input type="text" value="{{(params.bookId-0) + (params.chapterId-0)}}" disabled>',
  controller: 'ChapterController'
  });
});
