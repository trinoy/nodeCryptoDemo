"cypto demo" 

# Installation
1. Download the code from github into local and do npm install. Server will start at localhost:3000

# Folder Structure
1. public folder wil have the client side code. It is an angular application 
	1.1 views/user will have the login.controller which will call the crypto.service.client to 
		1.1.1 to get the public key from server
		1.1.2 encrypt the data using the public key
	1.2 crypto.service.client will have http calls to the crypto.service.server
2. server folder contains the nodejs server
	2.1 crypto.service.server will contain the below functionalities
		2.1.1 Generate public private key pair
		2.1.2 Send public key to client
		2.1.3 Get the encrypted data from client and decrypt it with the private key
		
