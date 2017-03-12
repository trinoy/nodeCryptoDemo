(function () {
    angular
        .module("cryptoDemo")
        .factory("cryptoService", cryptoService);

    function cryptoService($http) {

        return {
            "getPublicKey" : getPublicKey,
            "encryptUserData" : encryptUserData,
            "saveEncryptedData" : saveEncryptedData
        }

        function getPublicKey(){
            var url = "/api/getPublicKey";
            return $http.get(url);
        }

        function encryptUserData(data,public_key_content){
            var public_key = forge.pki.publicKeyFromPem(public_key_content);
            return public_key.encrypt(data);
        }

        function saveEncryptedData(encrypted_data){
            var url = "/api/saveEncryptedData";
            var data = {encypted_data:encrypted_data};
            return $http.post(url,data);
        }

    }
})();