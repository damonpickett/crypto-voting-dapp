# Crypto Voting App
This project is based on a video tutorial by [Moralis](https://www.youtube.com/watch?v=MI_Se26Sfmo)

## Notes from video

### Setup
1. Fork and clone [repo](https://github.com/IAmJaysWay/FirstDapp-Starter) 
1. `cd` into `smartcontracts` folder and `npm i -D hardhat` (install hardhat)
2. Initialize a hardhat project with `npx hardhat` (initialize a hardhat project)
3. Install dependencies: `npm i -D dotenv`, `npm i -D @nomiclabs/hardhat-etherscan`

### Solidity Setup
1. Change `Greeter.sol` to `MarketSentiment.sol` and delete greeter code
2. Add the following code:

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract MarketSentiment {

    address public owner;
    // tickers are the cryptocurrencies we'll be voting on
    string[] public tickersArray;

    constructor() {
        owner = msg.sender;
    }

    struct ticker {
        bool exists;
        uint256 up;
        uint256 down;
        // the Voters mapping tells us if an address has voted or not
        mapping(address => bool) Voters;
    }

    event tickerupdated (
        uint256 up,
        uint256 down,
        address voter,
        string ticker
    );

    // The string in this case would be something like 'BTC'...
    // So Tickers is a mapping of strings to the ticker struct
    mapping(string => ticker) private Tickers;

    function addTicker(string memory _ticker) public {
        require(msg.sender == owner, "Only the owner can create tickers");
        ticker storage newTicker = Tickers[_ticker];
        newTicker.exists = true;
        tickersArray.push(_ticker);
    }

    function vote(string memory _ticker, bool _vote) public {
        require(Tickers[_ticker].exists, "Can't vote on this coin");
        require(!Tickers[_ticker].Voters[msg.sender], "You have already voted for this coin");

        ticker storage t = Tickers[_ticker];
        t.Voters[msg.sender] = true;

        if(_vote){
            t.up++;
        } else {
            t.down++;
        }

        emit tickerupdated(t.up, t.down, msg.sender, _ticker);
    }

    function getVotes(string memory _ticker) public view returns (
        uint256 up,
        uint256 down
    ){
        require(Tickers[_ticker].exists, "No such ticker defined");
        ticker storage t = Tickers[_ticker];
        return(t.up, t.down);
    }


}
```

### Compile and Deploy Smart Contract
1. Open `/scripts` folder, rename `greeter.js` to `deployMarketSentiment.js`
2. Remove comments from file, replace `Greeter` with `MarketSentiment` and replace `greeter` with `marketsentiment`.
3. In `hardhat.config.js` add the following lines to the top of the file:
```
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();
```
4. Create `.env` file and add:
```
API_KEY = '{polygonscan account api key}'
POLYGON_MUMBAI = '{polygon-mumbai node url}' (from Moralis Speedy Nodes)
PRIVATE_KEY = '{mm private key}'
```
5. In `hardhat.config.js` add a `networks` and `etherscan` object:
```
module.exports = {
  solidity: "0.8.7",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};
```
