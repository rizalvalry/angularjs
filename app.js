var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider

        //default page
        .when('/',{
           templateUrl : 'pages/homepage.html',
           controller  : 'Homepage'
        })

        //about page
        .when('/about',{
            templateUrl : 'pages/about.html',
            controller  : 'About'
        })
        
        //search page
        .when('/search',{
            templateUrl : 'pages/search.html',
            controller  : 'Search'
        })


        //search video
        .when('/video',{
            templateUrl : 'pages/video.html',
            controller  : 'Video'
        })

        //search people
        .when('/people',{
            templateUrl : 'pages/people.html',
            controller  : 'People'
        })

        //search Doc
        .when('/documents',{
            templateUrl : 'pages/documents.html',
            controller  : 'Documents'
        })

        //date page
        .when('/date',{
           templateUrl : 'pages/date.html',
           controller  : 'Date'
        });
});
