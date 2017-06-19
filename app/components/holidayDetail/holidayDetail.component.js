	angular.module("myApp")
		.component("holidayDetail", {
			templateUrl: "components/holidayDetail/holidayDetail.component.html",
			controller: function ($scope,$state,dataService) {
				$scope.message = "Holiday Calender 2015!!";
				console.log($state.params);
				$scope.details = $state.params;
				dataService.getAllData().then(function(holidayDetail){	
					var date = $scope.details.date;
					var holidayName = $scope.details.name;		
					var holidayList = holidayDetail.holidays[date];	
					angular.forEach(holidayList, function(holiday){
						if(holidayName == holiday.name){
							$scope.finalDetails = holiday;
						}
						console.log(holiday.name);
					})
				})
			}
		});
