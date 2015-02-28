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

	.config( function ($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'scripts/comments/list.tpl.html',
				controller: 'ListController'
			})
			.when('/playlist/:id', {
				templateUrl: 'scripts/songs/songs.tpl.html',
				controller: 'SongsController'
			})

	})



}());