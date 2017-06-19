angular.module("myApp").service('dataService', function ($http) {

	var service = {
		key: "e29ed0ea-d6eb-4b35-9516-414572c9d1f5",
		apiUrl: "https://holidayapi.com/v1/holidays?",
		country: "US",
		year: "2015",
		getAllData: function () {
			var url = this.apiUrl + "key=" + this.key + "&country=" + this.country + "&year=" + this.year;
			return $http.get(url, { cache: true })
				.then(function (response) {
					return response.data;
				});
		}
	}

	return service;
})
