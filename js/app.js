var app = angular.module("App", []);
app.controller("Money", function($scope, $http) {           
    $http.get("https://api.fixer.io/latest?symbols=USD,EUR,CAD,JPY&base=MXN")
      .success(function(data){
        $scope.CAD= parseFloat(data.rates.CAD)
        $scope.EUR= parseFloat(data.rates.EUR)
        $scope.USD= parseFloat(data.rates.USD)
        $scope.JPY= parseFloat(data.rates.JPY)
      });
    $http.get("https://api.fixer.io/latest?symbols=MXN&base=USD")
      .success(function(data){        
        $scope.USDBASE= parseFloat(data.rates.MXN)
      });
      $http.get("https://api.fixer.io/latest?symbols=MXN&base=CAD")
      .success(function(data){        
        $scope.CADBASE= parseFloat(data.rates.MXN)
      });
      $http.get("https://api.fixer.io/latest?symbols=MXN&base=EUR")
      .success(function(data){        
        $scope.EURBASE= parseFloat(data.rates.MXN)
      });
    $http.get("https://api.bitso.com/v3/ticker/?book=btc_mxn")
      .success(function(data) {
        $scope.BTC= parseFloat(data.payload.last)
      });
    $http.get("https://api.bitso.com/v3/ticker/?book=xrp_mxn")
      .success(function(data) {
        $scope.XRP= parseFloat(data.payload.last)
      });  
    $http.get("https://api.bitso.com/v3/ticker/?book=eth_mxn")
      .success(function(data){
        $scope.ETH= parseFloat(data.payload.last)
      });
    $http.get("https://api.bitso.com/v3/ticker/?book=ltc_mxn")
      .success(function(data){
        $scope.LTC= parseFloat(data.payload.last)
      }); 
});