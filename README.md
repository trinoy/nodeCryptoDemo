"cypto demo" 

# Installation
1. Download the code from github into local and do npm install and then node server.js.Server will start at localhost:3000

# Folder Structure
1. public folder will have the client side code. It is an angular application 
	* views/user will have the login.controller which will call the crypto.service.client to 
		* to get the public key from server
		* encrypt the data using the public key
		* crypto.service.client will have http calls to the crypto.service.server
2. server folder contains the nodejs server
	* crypto.service.server will contain the below functionalities
		* Generate public private key pair
		* Send public key to client
		* Get the encrypted data from client and decrypt it with the private key
		
