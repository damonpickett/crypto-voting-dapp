import React from "react";

const InstructionModal = (props) => {
  if (!props.instructionModal) {
    return null;
  }

  return (
    <div className="modal" onClick={() => props.setInstructionModal(false)}>
      <div className="modal-canvas">
        <div className="modal-header">
          <h4>Instructions</h4>
        </div>
        <div className="modal-body">
          <ul>
              <ol>Connect your Ethereum wallet via the 'Connect Wallet' button in the top right corner</ol>
              <ol>Connenct your wallet to Polygon's Mumbai testnet</ol>
              <ol>You'll need Matic tokens to interact with the blockchain. You can collect mock Matic tokens from the <a href='https://faucet.polygon.technology/' target='_blank' rel='noreferrer'>Polygon Faucet</a></ol>
              <ol>Select 'Up' or 'Down' to vote as to whether you believe the value of the given crypto currency will rise or fall</ol>
              <ol>Click the 'INFO' button to learn more about a given currency</ol>
          </ul>
        </div>
        <div className="modal-header">
          <h4>Further Info</h4>
        </div>
        <div className="modal-body">
          <ul>
              <ol>The percentages displayed are the amount of voters who believe the given currency's value will rise</ol>
              <ol>This application's smart contract has been deployed to <a href='https://mumbai.polygonscan.com/' target='_blank' rel='noreferrer'>Polygon's Mumbai Testnet</a></ol>
              <ol>The contract and its transactions can be viewed <a href='https://mumbai.polygonscan.com/address/0x1570Bbfca7492c2294410b6966609e9b8B2952d8' target='_blank' rel='noreferrer'>here</a></ol>
              <ol>For a breakdown of how this app works, and to view the code, check out the <a href='https://github.com/damonpickett/crypto-voting-dapp' target='_blank' rel='noreferrer'>Github repo</a></ol>
              <ol>This application was built based on a free <a href='https://www.youtube.com/watch?v=MI_Se26Sfmo' target='_blank' rel='noreferrer'>tutorial</a> provided by <a href='https://moralis.io/' target='_blank' rel='noreferrer'>Moralis</a></ol>
          </ul>
        </div>
        <div className="modal-footer">
        
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;