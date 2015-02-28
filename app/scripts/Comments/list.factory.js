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