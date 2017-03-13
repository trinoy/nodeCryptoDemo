(function () {
    angular
        .module("cryptoDemo")
        .controller("LoginController", LoginController);

    function LoginController(cryptoService) {
        var vm = this;
        vm.login = login;
        vm.user = {};

        vm.init = init;

        vm.alerts = [

        ];

        vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
        };

        function init() {
            vm.publicKey = cryptoService.getPublicKey()
                .then(
                    function (key_content) {
                        vm.public_key_content = key_content.data;
                        console.log("Hello Init Callback");
                    },
                    function (error) {
                        console.log(error);
                    });
            console.log("Hello Init");
        }

        function login(user) {
            vm.encrypted_data = cryptoService.encryptUserData(user.username, vm.public_key_content);
            console.log(vm.encrypted_data);

            cryptoService.saveEncryptedData(vm.encrypted_data)
                .then(
                    function (success) {
                        console.log(success);
                        console.log("Hello login Callback");
                        vm.alerts.push({ type: 'info', msg: 'Data Updated Successfully'})
                    },
                    function (error) {
                        console.log(error);
                        vm.alerts.push({ type: 'danger', msg: 'Data Update Failed'})
                    });

            console.log("Hello Login");
        }

        init();
    }
})();