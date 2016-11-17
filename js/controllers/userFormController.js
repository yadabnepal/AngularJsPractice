app.controller('userFormController', ['$scope', function ($scope) {
	var self = this;
    self.user = {id:null, name:'',address:'',email:''};
    self.users = [// In future posts, we will get it from server using service
                      {id:1, name: 'Sam', address: 'NY', email: 'sam@abc.com'},
                      {id:2, name: 'Tomy', address: 'ALBAMA', email: 'tomy@abc.com'},
                      {id:3, name: 'kelly', address: 'NEBRASKA', email: 'kelly@abc.com'}
              ];
    self.id = 4;
	self.submit = function () {
        if(self.user.id===null){
            self.user.id = self.id++;
            self.users.push(self.user);
        }else{
            for(var i = 0; i < self.users.length; i++){
                          if(self.users[i].id === self.user.id) {
                            self.users[i] = self.user;
                            break;
                          }
                      }
        }
        self.reset();
		}
    self.reset = function(){
        self.user = {id:null, name:'',address:'',email:''};
         $scope.userForm.$setPristine();
    }
    self.remove = function(id){
        for(var i =0;i<self.users.length;i++)
            {
                if(id===self.users[i].id){
                    self.users.splice(i,1);   
                    if(self.user.id === id){
                        self.reset();
                    }
                    break;
                }
            }
    };
    self.edit = function(id){
         for(var i =0;i<self.users.length;i++)
            {
                if(id===self.users[i].id){
                    self.user = angular.copy(self.users[i]);
                    break;
                }
            }
    };
}]);