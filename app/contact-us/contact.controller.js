'use strict';

app.controller('contactCtrl', ['$scope', '$rootScope', '$location', '$q', '$timeout', 'toasty', 'query',
    function($scope, $rootScope, $location, $q, $timeout, toasty, query) {

        $scope.user = {
            name: "",
            email: "",
            contact: "",
            subject: "",
            message: ""
        }

        $scope.sendQuery = function(valid, data) {
            console.log(valid, "data>>>>>", data)
            if (valid) {
            $rootScope.waiting = true;
                query.send(data).then(function(response) {
                	 $rootScope.waiting = false;
                    if (response.authentication === true) {
                        toasty.success({
                            title: 'Success! Message',
                            msg: response.message
                        });
                    } else {
                        toasty.error({
                            title: 'Error! Message',
                            msg: response.message
                        });
                    }

                })
            } else {
                toasty.error({
                    title: 'Error! Message',
                    msg: "Please fill all mandatory(*) fields"
                });
            }
        }

    }
]);
