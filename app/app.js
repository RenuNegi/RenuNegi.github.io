'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'ngMaterial'
])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/holidayList");

    var states = [
      {
        name: 'holidayList',
        url: '/holidayList', 
        // Using component: instead of template:
        component: 'holidayList'
      },
      {
        name: 'holidayDetail',
        url: '/holidayDetail?date&name',
        component: 'holidayDetail'
      }
    ]

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  })

  .value('$routerRootComponent', 'main')
  .component('main', {
    template:
    '<ui-view></ui-view>\n'

  });
 