;(function(){

	angular.module('Songs')

	.controller('SongsController', ['$http', '$scope', '$rootScope', '$routeParams', 'PARSE',
		
		function ($http, $scope, $rootScope, $routeParams, PARSE) {

				
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