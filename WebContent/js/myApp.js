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

/*app.service('ApiCall', ['$http', function ($http){
	var result;
	this.postApiCall = function (obj){
		result = $http.post('http://www.lifeofengineers.com/rest/registration/performlogin/', obj).seccess(function (data, status){
			result = (data);
		}).error(function(){
			console.log("Error while invoking service");
		});
		return result;
	};
	$http({
	    url: "http://www.lifeofengineers.com/rest/registration/performlogin",
	    dataType: "json",
	    method: "POST",
	    headers: {
	        "Content-Type": "application/json"
	    },
	    data: {'user_name':'anchu.venki@gmail.com', 'password': 'venkat'}
	}).success(function(response){
		result = response;
	}).error(function(error){
		console.log("Error while invoking service");
	});
}]);*/

app.controller("pearlCtrl", function ($scope, $http) {
	$scope.images = [{name:"Lake", price:"100", src:"images/Lake300_200.jpg"},
	                 {name:"RiverSide", price:"100", src:"images/RiverSide300_200.jpg"},
	                 {name:"RiverSide", price:"100", src:"images/RiverSide300_200.jpg"},
	                 {name:"RedCar", price:"100", src:"images/RedCar300_200.jpg"},
	                 {name:"RiverSide", price:"100", src:"images/RiverSide300_200.jpg"},
	                 {name:"RedCar", price:"100", src:"images/RedCar300_200.jpg"},
	                 {name:"RedCar", price:"100", src:"images/RedCar300_200.jpg"},
	                 {name:"Lake", price:"100", src:"images/Lake300_200.jpg"},
	                 {name:"RiverSide", price:"100", src:"images/RiverSide300_200.jpg"},
	                 {name:"RiverSide", price:"100", src:"images/RiverSide300_200.jpg"},
	                 {name:"RedCar", price:"100", src:"images/RedCar300_200.jpg"},
	                 {name:"SeaSide", price:"100", src:"images/SeaSide300_200.jpg"}];
    $scope.msg = "I love Paris";
//    var obj = {'user_name':'anchu.venki@gmail.com', 'password': 'venkat'};
    /*var rsult = ApiCall.postApiCall(obj).success(function(data){
    	console.log(rsult);
    });*/
    $http({
	    url: "http://192.168.136.1:8080/LifeOfEngineers/rest/registration/performlogin",
	    dataType: "json",
	    method: "POST",
	    headers: {
	        "Content-Type": "application/json"
	    },
	    data: {'user_name':'anchu.venki@gmail.com', 'password': 'venkat'}
	}).success(function(response){
		result = response;
	}).error(function(error){
		console.log("Error while invoking service");
	});
    
    /*$http.get('http://rest-service.guides.spring.io/greeting').
    then(function(response) {
    	console.log(response.data);
    });*/
    
//    http://192.168.136.1:8080/LifeOfEngineers/
});

/*app.factory('albumService', ['$http', '$q'], function albumService($http, $q) {
	//interface
	var service = {
			albums: [],
			getAlbums: getAlbums
	};
	return service;

	// implementation
	function getAlbums() {
		var def = $q.defer();
//		$http.get(services.path + 'student/listing', {params: {page: page, id: id}}).success(succFn).error(cmnSvc.errorHandler);
		$http.get("http://www.lifeofengineers.com/rest/registration/performlogin", {params: {user_name: 'anchu.venki@gmail.com', password: 'venkat'}})
			.success(function(data) {
				service.albums = data;
				def.resolve(data);
			})
			.error(function() {
				def.reject("Failed to get albums");
			});
		return def.promise;
	}
});*/

/*app.controller('pearlCtrl', ['$scope', 'albumService', function albumsController($scope, albumService) {
	$scope.msg = "I love Paris";
	var vm = this;
	vm.albums = [];
	vm.getAlbums = function() {
		albumService.getAlbums().then(function(albums) {
			vm.albums = albums;
			console.log('albums returned to controller.');
		},
		function(data) {
			console.log('albums retrieval failed.')
		});
	};
	vm.getAlbums();
}]);*/


/*app.controller("pearlCtrl",function submit($scope,$http){
	$scope.msg = "I love Paris";
    var username = "anchu.venki@gmail.com";
    var password=  "venkat";
    var url = 'http://www.lifeofengineers.com/rest/registration/performlogin/';
    console.log($http.get(url + username + "/" + password));
});*/




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