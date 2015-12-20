/***** Controllers ******/

todoApp.controller('MainController', ['$scope', 'todoListService', function($scope, todoListService) {
	todoListService.success(function(data) {
		$scope.todo = data;


		$scope.incompleteItems = function () {
			var count = 0;
			angular.forEach($scope.todo.items, function (item) {
				if (!item.done) {
					count = count + 1;
				}
			});
			return count;
		}

		$scope.warningLevel = function () {
			return $scope.incompleteItems() < 3 ? "label-success" : "label-warning";
		}

		$scope.addNewItem = function (newItem) {

			if(newItem == null || newItem == ''){

				angular.forEach($scope.todo.items, function(value, key) {
					if (value.action == newItem){
						$scope.todo.items.splice(key, 1);
					}
				});	
			}
			else{
				$scope.todo.items.push({ action: newItem, done: false });
				$scope.newItem = null;
			}
		}

		$scope.removeItem = function(index){

			angular.forEach($scope.todo.items, function(value, key) {
				if (value.action == index){
					$scope.todo.items.splice(key, 1);
				}
			});
		};
	});
}]);


todoApp.filter("checkedItems", function () {
	return function (items, showComplete) {
		var resultArr = [];
		angular.forEach(items, function (item) {
			if (item.done == false || showComplete == true) {
				resultArr.push(item);
			} });
		return resultArr;
	}
});