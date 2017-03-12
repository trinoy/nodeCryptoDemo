"cypto demo" 

# Installation
1. Download the code from github into local and do npm install and then node server.js.Server will start at localhost:3000

# Folder Structure
1. public folder will have the client side code. It is an angular application 
..1. views/user will have the login.controller which will call the crypto.service.client to 
..1.to get the public key from server
..1. encrypt the data using the public key
..2. crypto.service.client will have http calls to the crypto.service.server
2. server folder contains the nodejs server
..1.crypto.service.server will contain the below functionalities
..1. Generate public private key pair
..2. Send public key to client
..3. Get the encrypted data from client and decrypt it with the private key
		
