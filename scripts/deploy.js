async function main() {
    const CryptoWill = await ethers.getContractFactory("CryptoWill");
 
    // Start deployment, returning a promise that resolves to a contract object
    const crypto_will = await CryptoWill.deploy("Test my cypto will contract");
    console.log("Contract deployed to address:", crypto_will.address);}
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });