//var crypto = require('crypto');

//var cryptico = require("cryptico");
//var keypair = require('keypair');
var forge = require('node-forge');
var PromiseA = require('bluebird').Promise;
var fs = PromiseA.promisifyAll(require('fs'));
var path = require('path');
var pki = forge.pki;
var rsa = forge.pki.rsa;

var mkdirpAsync = PromiseA.promisify(require('mkdirp'));

function generateKeyPair(pathname) {

    var keypair1 = rsa.generateKeyPair({bits: 2048, e: 0x10001});

    //var key = ursa.generatePrivateKey(1024, 65537);
   // var privpem = key.toPrivatePem();
   // var pubpem = key.toPublicPem();
    var privpem = pki.privateKeyToPem(keypair1.privateKey)
    var pubpem = pki.publicKeyToPem(keypair1.publicKey)

    var privkey = path.join(pathname, 'privkey.pem');
    var pubkey = path.join(pathname, 'pubkey.pem');

    return mkdirpAsync(pathname)
        .then(function () {
            return PromiseA.all([
                fs.writeFileAsync(privkey, privpem, 'ascii')
                , fs.writeFileAsync(pubkey, pubpem, 'ascii')
            ]);
            })
        .then(function () {
            return keypair1;
            });
}

PromiseA.all([
    generateKeyPair('keystore/key')
]).then(function (keys) {
    console.log('generated %d keypairs', keys.length);
});

//var pair = keypair();
//console.log(pair);

function retrieveKeyPair(filename){

    return fs.readFileAsync(filename, "ascii")

     .then(function (content) {
        console.log("so this is what we got: ", content);
        //var obj = {};
        // obj.content = content;
       return content;
      });

}
var privKey1;
var pubKey1;

var keysToFetch = ['keystore/key/pubkey.pem','keystore/key/privkey.pem']

PromiseA.all([retrieveKeyPair(keysToFetch[0]), retrieveKeyPair(keysToFetch[1])])
    .spread(function(content1, content2){
        privKey1 = pki.privateKeyFromPem(content1);
        pubKey1 = pki.publicKeyFromPem(content2);
    });



//var publicKey = forge.pki.publicKeyFromPem(pair.public);
//var privateKey = forge.pki.privateKeyFromPem(pair.private);
//var content = "Hello World";
//var encrypted = keypair1.publicKey.encrypt(content);
//var decrypted = keypair1.privateKey.decrypt(encrypted);
//console.log("encypted username is",encrypted);
//console.log("decrypted username is",decrypted);




var p_length = 50;

//var diffHell = crypto.createDiffieHellman(p_length);

//diffHell.generateKeys();

//var bits = 1024; //2048;
//var passPhrase = passPhrase;
//var rsaKey = cryptico.generateRSAKey(passPhrase,bits);
//var rsaPublicKey = cryptico.publicKeyString(rsaKey);


//var publicKey = cryptico.publicKeyString(rsaKey);
//var privateKey = cryptico.privateKeyString(rsaKey);

//console.log("Public Key : " ,publicKey);
//console.log("Private Key : " ,privateKey);


/*
var content = "Hello World";
var buffer = new Buffer(content);
var buffer1 = new Buffer(publicKey.toString());
var buffer2 = new Buffer(privateKey.toString());
var encrypted = crypto.publicEncrypt(buffer1, buffer);
console.log("encypted username is",encrypted.toString('base64'));

var decrypted = crypto.privateDecrypt(buffer2, encrypted);
console.log("encypted username is",encrypted.toString('base64'));


*/

