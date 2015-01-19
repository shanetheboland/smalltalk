'use strict';
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name smallTalkApp
 * @description
 * # smallTalkApp
 *
 * Main module of the application.
 */
var app = angular
  .module('smallTalkApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/postview.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  })
  .constant('FIREBASE_URL', 'https://small-talk-db.firebaseio.com');