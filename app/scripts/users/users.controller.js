;(function(){
	'use strict';

	angular.module('Songs',['ngRoute', 'ngCookies'])

	.controller('UserCtrl', ['$scope', 'UserFactory', '$location',
		function ($scope, UserFactory, $location) {
			var user = UserFactory.user();
			if (user) {
				return $location.path('/');
			}

			$scope.registerUser = function (userObj) {
				UserFactory.register(userObj);
			}

			$scope.loginUser = function (userObj) {
				UserFactory.login(userObj);
			};
		}




	]);
}());