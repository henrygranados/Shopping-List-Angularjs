/***** SERVICES ********/

todoApp.factory('todoListService', ['$http', function($http) { 
	return $http.get('javascript/partials/jsonData.json') 
	.success(function(data) { 
		return data; 
	}) 
	.error(function(err) {  
		return err; 
	}); 
}]);