;(function(){

	angular.module('Songs')

	.controller('SongsController', ['$scope', '$location', '$rootScope',
		
		function ($scope, $location, $rootScope) {

			var r = $location.path();

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
				// }

				$rootScope.$on('song:added', function (){
					console.log('Tune Added!');
						
				})

			}
		


	]);

}());