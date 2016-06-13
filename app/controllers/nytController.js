angular.module('nytSearchApp').controller('nytCtrl', function ($scope,$resource) {
	$scope.appName = 'New york Times App';
	$scope.search_city = '';
	$scope.error_status = true;
	$scope.error_message = 'Unable to load New York times API Data :( ';

	$scope.getArticles = function(city){

			var API_KEY = '4eab7fb120de4ef2b07371404a9d2257';

			var articles = $resource(myApp.API_PATH+'?api-key='+API_KEY+'&fq='+city);

			articles.get(function (success) {
			  console.log('success');
			  console.log(success.response.docs);
			  $scope.articles = success.response.docs;
			  $scope.error_status = false;
			},
				function(error){
					console.log('error');
					console.log(error);
					if(error.statusText === ''){
						alert('Error 429 API Limit exceeded');
					}
				}
			);
	};

	document.getElementById('search-nyt-btn').addEventListener('click', function(){
		var city = document.getElementById('search-city').value;
		console.log(city);

		if(city === undefined || city == '')	{
			alert('enter a city value to get articles of your city');
		}
		else {
			$scope.getArticles(city);
		}

	});

});