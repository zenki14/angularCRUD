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