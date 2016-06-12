angular.module('nytSearchApp').controller('nytCtrl', function ($scope,$resource) {
	$scope.appName = 'New york Times App';

	$scope.getArticles = function(){

			var API_KEY = '4eab7fb120de4ef2b07371404a9d2257';

			var city = $scope.search_city;

			var articles = $resource(myApp.API_PATH+'?api-key='+API_KEY+'&fq='+city);

			articles.get(function (success) {
			  console.log('success');
			  console.log(success.response.docs);
			  $scope.articles = success.response.docs;
			},
				function(error){
					console.log('error');
				}
			);
	};
	
});