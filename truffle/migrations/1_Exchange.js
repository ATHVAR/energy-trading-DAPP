const fs = require('fs');
const Exchange = artifacts.require('Exchange');

module.exports = function (deployer) {
  deployer
    .deploy(Exchange)
    .then(async (contractInstance) => {
      // This function is executed after the contract is deployed

      // contractInstance is the instance of the deployed contract

      // Write deployment information to a JSON file
      const deploymentInfo = {
        contractAddress: contractInstance.address,
        
      };

      fs.writeFileSync(
        './exchange.json', 
        JSON.stringify(deploymentInfo, null, 2),
      );

      console.log('Contract deployed successfully!');
      console.log('Deployment information:', deploymentInfo);
    })
    .catch((error) => {
      console.error('Error deploying contract:', error);
    });
};
