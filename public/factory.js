
'use strict';


var app = angular.module('examEx.factory', [])


    app.factory('phoneFactory', ['$http', function ($http) {


        var urlBase = 'api/';
        var phoneFactory = {};
        phoneFactory.getAll = function () {
            return $http.get(urlBase)
        }
        phoneFactory.removeContact = function (name) {
            return $http.delete(urlBase + name)
        }

        phoneFactory.addPhone = function (newPhone) {
            return $http.post(urlBase, newPhone)
        }


        return phoneFactory;
    }]);



