angular.module('AdminLogin', [])
    .controller('LoginAdmin', function ($scope) {
    $scope.login = function ( ){
        if($scope.username==="tama"&&$scope.password==="tama") {
            $scope.login1="Anda berhasil login...";
            alert('Selamat Datang Tama', 10);
            setTimeout("location.href='index.html'", 10);
        } else if($scope.username==="admin"&&$scope.password==="admin"){
            $scope.login1="Anda berhasil login...";
            alert('Selamat Datang Admin', 10);
            setTimeout("location.href='index.html'", 10);
        } else if($scope.username==="ucup"&&$scope.password==="ucup"){
            $scope.login1="Anda berhasil login...";
            alert('Selamat Datang Ucup', 10);
            setTimeout("location.href='index.html'", 10);
        } else if($scope.username==="dayat"&&$scope.password==="dayat"){
            $scope.login1="Anda berhasil login...";
            alert('Selamat Datang Dayat', 10);
            setTimeout("location.href='index.html'", 10);
        } else{
            alert("Username dan Password salah!");
        }
    $scope.name = $scope.username;
    $scope.pass=$scope.password;
 };
})