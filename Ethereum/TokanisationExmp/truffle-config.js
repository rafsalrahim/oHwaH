const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      //port: 8545
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    }
  },
  compilers: {
    solc:{
        version: "0.8.0"
    }
}
};
