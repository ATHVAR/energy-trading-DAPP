Energy Trading Dapp 
### The Step-by-step instructions for setting up the application for use.

>> Initialization
step 1: npm install
step 2: run deploy.js file( this file will run the smart contract and will get contract address)
step 3: copy the contract address and paste in exchange.js file line 14.

>> local host network
> uncomment the lines of truffle.config.js file from 67 to 71
step 4: run ganache
step 5: add the ganache network to  metamask and import the 10 accounts to metamask using import accounts(using private keys)
step 6: run server.js( the file will execute parallely the simulation and prosumer js file)

### The deployed local host network details(output)
using 10 amount of agents
starting simulation
time 2184
House No: {houseNO}
Ethereum Address: 0x1619e557d484e4Ca472dDA063AbDd4f701C200c3
Price: 168233541735541
Amount: 179
Date: 1700718869094
using 10 amount of agents
starting simulation
time 2184
House No: {houseNO}
Ethereum Address: 0x1619e557d484e4Ca472dDA063AbDd4f701C200c3
Price: 270437889169040
Amount: 914
Date: 1700718869111
House No: {houseNO}
Ethereum Address: 0x4359d25a2a5073501832bdb391fA9E9B8B08305e
Price: 257891556243480
Amount: 1172
Date: 1700718869168
House No: {houseNO}
Ethereum Address: 0x4359d25a2a5073501832bdb391fA9E9B8B08305e
Price: 261649818114872
Amount: 2671
Date: 1700718869193
House No: {houseNO}
Ethereum Address: 0x2Bb0F3659B09E05AdEbEEABD717E32c0d7d5d58f
Price: 198853055248185
Amount: 3854
Date: 1700718869219
House No: {houseNO}
Ethereum Address: 0x2Bb0F3659B09E05AdEbEEABD717E32c0d7d5d58f
Price: 250891694863227
Amount: 4472
Date: 1700718869248
House No: {houseNO}
Ethereum Address: 0xFbF8d415BB3ec5807C505DD7bF8569a8E36F8005
Price: 263501078098863
Amount: 2683
Date: 1700718869272
Energy Exchanged
Energy Exchanged
price in Dollars 0.021
writing results of simulation to csv file : output.csv
DONE!
DONE!
writing results of simulation to csv file : output.csv
DONE!
Object written successfully :/
DONE!


>> public test network
>uncomment lines 47 and from 85 to 91 to deploy in sepolia public test network 
>in metamask, change the network to sepolia
>add some sepolia faucet to the account
>change the folder to truffle then run the command truffle migrate --network sepolia

### The deployed public test nework details(output)


Compiling your contracts...
===========================
> Compiling .\contracts\Exchange.sol
> Compiling .\math.sol
> Artifacts written to P:\Decentralized-Energy-Trading-using-Blockchain (2)\truffle\build\contracts
> Compiled successfully using:
   - solc: 0.8.21+commit.d9974bed.Emscripten.clang


Starting migrations...
======================
> Network name:    'sepolia'
> Network id:      11155111
> Block gas limit: 30000000 (0x1c9c380)


1_Exchange.js
=============

   Deploying 'Exchange'
   > transaction hash:    0x3ef0d2b3244b6437ba6ab4cb9b52b54a6d09e866a10106755636c236cd510b72
   > Blocks: 1            Seconds: 8
   > contract address:    0xAfB28AFc54988626b97916b67442C18875cC724E
   > block number:        4749555
   > block timestamp:     1700732844
   > account:             0x574790701e9288ceacbFd6B3384Fbffe26463b01
   > balance:             0.496736180930906156
   > gas used:            1270686 (0x13639e)
   > gas price:           2.568548854 gwei
   > value sent:          0 ETH
   > total cost:          0.003263819069093844 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 4749556)
   > confirmation number: 2 (block: 4749557)
Contract deployed successfully!
Deployment information: { contractAddress: '0xAfB28AFc54988626b97916b67442C18875cC724E' }
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.003263819069093844 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.003263819069093844 ETH


>> Testing
>To test the contract file, go to truffle folder, then run the command truffle test

>> Front end
> Run 'node server.js', then http://localhost:9000/
> In local host 9000 we can see the supply demand etc of different houses




