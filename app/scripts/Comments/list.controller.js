;(function(){

	angular.module('Songs')

	.controller('ListController', ['$http', '$scope', '$location', '$rootScope', 'PARSE', 'PlaylistFactory',
		
		function ($http, $scope, $location, $rootScope, PARSE, PlaylistFactory) {



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
				

		


	}]);

}());