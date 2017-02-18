var app = angular.module("myapp", ["ngRoute"]);
/*app.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('');
}]);*/
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//	$locationProvider.html5Mode(true);
	$locationProvider.hashPrefix('');
    $routeProvider
    .when("/", {
        templateUrl : "./html/home.html",
    })
    .when("/emerald", {
        templateUrl : "./html/emerald.html",
        controller : "emeraldCtrl"
    })
    .when("/pearl", {
        templateUrl : "./html/pearl.html",
        controller : "pearlCtrl"
    });
}]);
app.controller("emeraldCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("pearlCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});
app.controller("menuController", function($scope) {
	$scope.jewmenu = [{name:"Emerald", value:"#emerald"},
	                  {name:"Pearl", value:"#pearl"},
	                  {name:"Ruby", value:"#ruby"}];
	$scope.dremenu = [{name:"Sar", value:"#sar"},
	                  {name:"Top", value:"#top"},
	                  {name:"Dre", value:"#dre"}];
});
/*
angular.module("student", []).controller('studentController', function($scope) {
   $scope.student = {
      firstName: "Sandeep",
      lastName: "Erukulla",
      marks: [80,90],
      
      fullName: function() {
         var studentObject;
         studentObject = $scope.student;
         return $scope.student.firstName + " " + $scope.student.lastName;
      },
      totalMarks: function(){
    	  var total = 0;
    	  for (var i = 0; i < $scope.student.marks.length; i++) {
    	      total += $scope.student.marks[i] << 0;
    	  }
    	  return total;
    	  var total;
    	  $.each($scope.student.marks, function(index, mark){
    		  total = parseInt(total) + parseInt(mark);
			});
   			return total;
   		}
   };
});

angular.module("employee", []).controller("employeeController", function($scope) {
	$scope.employee = {
		firstName: "Sandeep",
		lastName: "Erukulla",
		salary: 30000,

		fullName: function(){
	         return $scope.employee.firstName + " " + $scope.employee.lastName;
		}
	};
});

angular.module("filtersApp", []).controller('filterController', function($scope) {
   $scope.student = {
      firstName: "Sandeep",
      lastName: "Erukulla",
      fees:500,
      
      subjects:[
         {name:'Physics',marks:70},
         {name:'Chemistry',marks:80},
         {name:'Math',marks:65},
         {name:'Sceince',marks:65},
         {name:'Social',marks:65}
      ],
      
      fullName: function() {
    	  return $scope.student.firstName + " " + $scope.student.lastName;
      }
   };
   $scope.reset = function(){
       $scope.firstName = "Sandeep";
       $scope.lastName = "Erukulla";
       $scope.email = "sandeep@gemss.com";
    }
    $scope.submit = function(){
    	alert("Submitted");
    }
    $scope.reset();
    $scope.submit();
    function studentDataController($scope,$https) {
        var url = "data.txt";
     
        $https:get(url).success( function(response) {
           $scope.students = response;
        });
     }
});

$( document ).ready(function() {
    console.log( "ready!" );
    angular.bootstrap(document.getElementById("studentdetails"), ['student']);
    angular.bootstrap(document.getElementById("employeedetails"), ['employee']);
    angular.bootstrap(document.getElementById("filters"), ['filtersApp']);
});*/