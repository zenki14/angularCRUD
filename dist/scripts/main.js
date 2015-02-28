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
;(function(){

	angular.module('Songs')

	.controller('SongsController', ['$http', '$scope', '$rootScope', '$routeParams', 'PARSE',
		
		function ($http, $scope, $rootScope, $routeParams, PARSE) {


		// 	if(r === '/') {
		// 	SongsFactory.retrieve().success( function (data){
		// 		$scope.allSongs = data.results;
		// 	});
		// }

			// POST = URL, DATA, CONFIG
			// $http.get(PARSE.URL + 'classes/Whiskey', PARSE.CONFIG)
			// 	.success( function (data) {
			// 		$scope.allWhiskey = data.results;
			// })



			// $scope.addSongs = function (w) {
			// 	SongsFactory.add(w);
				// $http.post(PARSE.URL + 'classes/Whiskey', w, PARSE.CONFIG)
				// 	.success( function (){
				// 		$scope.whiskey = {};
				
				
				var LoadPlaylist = function(){
					console.log($routeParams.id);
					$http.get(PARSE.URL + 'classes/Lists/' + $routeParams.id, PARSE.CONFIG)
					.success(function (data){
						console.log(data);
					$scope.ListURL = data.ListURL;
					})
				} 
				LoadPlaylist();

			}

		


	]);

}());
;(function(){

	angular.module('Songs')

	.controller('ListController', ['$http', '$scope', '$location', '$rootScope', 'PARSE', 'PlaylistFactory',
		
		function ($http, $scope, $location, $rootScope, PARSE, PlaylistFactory) {

			// var r = $location.path();

		// 	if(r === '/') {
		// 	SongsFactory.retrieve().success( function (data){
		// 		$scope.allSongs = data.results;
		// 	});
		// }


			$scope.addSongs = function (){
				console.log($scope.listInput);
				$http.post(PARSE.URL + 'classes/Lists', {ListURL: $scope.listInput, Genre: $scope.listGenre}, PARSE.CONFIG)
				.success(function(){
					PlaylistFactory.ListGet().success( function (data){
					$scope.playlists = data.results;
					console.log($scope.playlists);
				})
			});

				
			}

			$scope.RoutePlay = function(URL){
				// console.log(URL);
				$rootScope.$broadcast('PlaylistSelected', URL);
				$location.path('/playlist/' + URL);
			}

		PlaylistFactory.ListGet().success( function (data){
				$scope.playlists = data.results;
				console.log($scope.playlists);

			})

		$scope.Remove = function (id){
					console.log(id);
						$http.delete(PARSE.URL + 'classes/Lists/' + id, PARSE.CONFIG)
						.success(function (data){
							console.log(data);

						 for(var i = 0; i < $scope.playlists.length; i++)
						 	{
						 		if($scope.playlists[i].objectId === id) {
						 		$scope.playlists.splice(i,1);
						 		return; 
						 		}
						 	}

						})
					} 
				
		// load();

			// $http.post(PARSE.URL + 'classes/Lists', {}, PARSE.CONFIG)
				// .success( function (data) {
				// 	$scope.allWhiskey = data.results;
			// }



			// $scope.addSongs = function (w) {
			// 	SongsFactory.add(w);
				// $http.post(PARSE.URL + 'classes/Whiskey', w, PARSE.CONFIG)
				// 	.success( function (){
				// 		$scope.songs = {};
				// }

			// 	$rootScope.$on('song:added', function (){
			// 		console.log('Tune Added!');
						
			// 	})

			// }
		


	}]);

}());
;(function(){

	angular.module('Songs')

	.factory("PlaylistFactory", ['$http', 'PARSE', 
		function ($http, PARSE){
			var ListGet = function(){
				return $http.get(PARSE.URL + 'classes/Lists', PARSE.CONFIG);
			}
			return {ListGet : ListGet};
		}


	]);




}());