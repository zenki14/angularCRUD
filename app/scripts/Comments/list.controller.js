;(function(){

	angular.module('Songs')

	.controller('ListController', ['$http', '$scope', '$location', '$rootScope', 'PARSE',
		
		function ($http, $scope, $location, $rootScope, PARSE) {

			// var r = $location.path();

		// 	if(r === '/') {
		// 	SongsFactory.retrieve().success( function (data){
		// 		$scope.allSongs = data.results;
		// 	});
		// }


			$scope.addSongs = function (){
				console.log($scope.listInput);
				$http.post(PARSE.URL + 'classes/Lists', {ListURL: $scope.listInput}, PARSE.CONFIG)
				
			}

			$http.get(PARSE.URL + 'classes/Lists', PARSE.CONFIG).success( function (data){
				$scope.playlists = data.results;
				console.log($scope.playlists[0].ListURL);

			})

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