angular.module('examEx', ["examEx.factory"])
    .controller('ExamController', ['$scope', "phoneFactory", function ($scope, phoneFactory) {


        refresh();

        function refresh() {
            phoneFactory.getAll().success(function (phones) {

                $scope.phones = phones;
            })
                .error(function () {
                    $scope.status = "unable to get todos"
                    console.log("not success")
                })
        }

        $scope.removePhone = function (contact) {

            phoneFactory.removeContact(contact).success(function (phone) {

                refresh()
            })
                .error(function () {
                    $scope.status = "unable to delete"
                    console.log("not success")
                })


        }


        $scope.addContact = function (contact) {


            phoneFactory.addPhone(contact).success(function (todo) {

                refresh()
            })
                .error(function () {
                    $scope.status = "unable to add"
                    console.log("not success")
                })


        }


    }]);