;(function(){
	'use strict';

	angular.module('Songs')

	.factory('UserFactory', ['$http', 'PARSE', '$cookieStore', '$location',
		function ($http, PARSE, $cookieStore, $location){

			var currentUser = function(){
				return $cookieStore.get('currentUser');
			};

			var checkLoginStatus = function(){
				var user = currentUser();
				if(user){
					PARSE.CONFIG.headers('X-PARSE-Session-Token') = user.sessionToken;
				}
			};

			var addUser = function(userObj){

				$http({
					method: 'GET',
					url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: userObj
        }).then (function (res) {
          console.log(res);
          $cookieStore.put('currentUser', res.data);
				});

			};

			var logoutUser = function () {
			  $cookieStore.remove('currentUser');
			  $location.path('/login');
			}
			
			return {
			  register : addUser, 
			  login : loginUser,
			  user : currentUser,
			  status : checkLoginStatus,
			  logout : logoutUser
			};
			
		}

	]);

}());