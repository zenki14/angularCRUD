;(function(){

	angular.module('Songs', ['ngRoute', 'plangular'])

	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
				'X-Parse-Application-Id' : 'gyByBHZIyr7EmeKTnMvjxvmgV8NdMhqPKGlj0VNO',
				'X-Parse-REST-API-Key' : 'iV5i3SsA8uRh7JczXX9jqqYcfsXDkvv8GEMVvaQQ',
				'Content-Type' : 'application/json'
			}
		}


	})

	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'scripts/comments/list.tpl.html',
				controller: 'ListController'
			})
			.when('/playlist/:id', {
				templateUrl: 'scripts/songs/songs.tpl.html',
				controller: 'SongsController'
			})
			.when('/login', {
			  templateUrl: 'scripts/users/user.login.tpl.html',
			  controller: 'UserCtrl'
			})
			.when('/register', {
			  templateUrl: 'scripts/users/user.register.tpl.html',
			  controller: 'UserCtrl'
			})
			.otherwise('/');

	}])

	.run(['$rootScope', 'UserFactory', 'PARSE',
		function ($rootScope, UserFactory, PARSE){
			$rootScope.$on('$routeChangeStart', function (){
				UserFactory.status();
			})
		}

	])



}());