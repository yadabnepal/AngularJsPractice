app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular theme this month.';
 	$scope.products= [
    {
    name: 'The Book of Trees',
    price: 19,
      pubdate: new Date('2014','03','08'),
    cover: 'images/spike-clean-blog-theme.jpg',
		likes:0,
		dislikes: 0
  },
    
    {
    name: 'The Book of Trees',
    price: 21,
      pubdate: new Date('2014','03','08'),
    cover: 'images/logger-creative-blog-theme.jpg',
		likes:0,
		dislikes: 0
  },
    
		{
    name: 'The Book of Trees',
    price: 22,
      pubdate: new Date('2014','03','08'),
    cover: 'images/spike-clean-blog-theme.jpg',
		likes:0,
		dislikes: 0
  },

    {
    name: 'The Book of Trees',
    price: 24,
      pubdate: new Date('2014','03','08'),
    cover: 'images/logger-creative-blog-theme.jpg',
		likes:0,
		dislikes: 0
  },
    
		
];
  $scope.plusOne = function(index) { 
  	$scope.products[index].likes += 1; 
	};
	$scope.minusOne = function(index) { 
  	$scope.products[index].dislikes += 1; 
	};
  
}]);
