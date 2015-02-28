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