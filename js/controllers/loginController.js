app.controller('loginController', ['$scope', function($scope){
	var self = this;
	self.user={
		username:'',
		password:''
	};
	self.submit = function(){
		alert("Form Submitted");
	};
	
}])