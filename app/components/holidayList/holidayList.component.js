(function () {

	angular.module("myApp")
		.component("holidayList", {
			templateUrl: "components/holidayList/holidayList.html",
			controller: function ($scope, dataService) {
				var holidayDataList = [];
				$scope.year = dataService.year;
				$scope.country = dataService.country;
				dataService.getAllData().then(function (holidayData) {
					holidayDataList = holidayData.holidays;
					$scope.holidayDataList = holidayDataList;
				}.bind(this));

			}
		});
} ());