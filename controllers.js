app.controller('Homepage', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $interval(function(){
        
        $http.get('angularJson/angular').success(function(response){
           
        $scope.myData = response;
        $scope.filter = response.people;
        $scope.test = response.doa;
        $scope.kora = response.channels;
        $scope.footer = response.footer;
        
        });
    },100);
}]);

console.log(this.myData);

app.controller('About',['$scope', function($scope) {
    $scope.about = new Date();
}]);

app.controller('Search',['$scope', function($scope) {
    $scope.about = "Search";
}]);

app.controller('Video', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $interval(function(){
        
        $http.get('angularJson/angular').success(function(response){
        $scope.myData = response;
        
        });
    },100);
}]);

app.controller('People', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $interval(function(){
        
        $http.get('angularJson/angular').success(function(response){
        $scope.myData = response;
        
        });
    },100);
}]);


app.controller('Documents', ['$scope', '$http', '$interval', function ($scope, $http, $interval) {
    $interval(function(){
        
        $http.get('angularJson/angular').success(function(response){
        $scope.myData = response;
        
        });
    },100);
}]);


app.controller("MainCtrl", function ($scope) {
 
        // $scope.fill = response;
        $scope.people = [
            {
                name:'Home'
            },
            {
                name:'About'
            },
            {
                name:'Events'
            },
            {
                name:'Group'
            }
    
        ]
    
});


app.controller('Date',['$scope', function($scope) {
    $scope.now = new Date();
}]);


