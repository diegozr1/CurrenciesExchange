var app = angular.module("App", []);
app.controller("Money", function($scope, $http) {    
    $http.get("https://api.coinbase.com/v1/currencies/exchange_rates")
      .success(function(data) {
        $scope.money = data;
        $scope.dolar = parseFloat(data.mxn_to_usd);
        $scope.bitcoin = parseFloat(data.mxn_to_btc);
      });    
});