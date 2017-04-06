var app = angular.module('calendar', ['ui.bootstrap', 'ui.bootstrap.datetimepicker']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.minDate = new Date();
  //$scope.date = new Date();
  $scope.user = {date:new Date(), subject:"", notes:""};
  $scope.submitForm = function(){
    console.log("Hello");
    console.log($scope.user.json.toString());
    //return $http.get('localhost:8080/create_appointment');
  }
  
  $scope.getAppointments = function() {
    return $http.get('localhost:8080/list_appointments');
  }
  
});