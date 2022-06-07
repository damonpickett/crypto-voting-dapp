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
              <ol>Connenct to Polygon's Mumbai testnet</ol>
              <ol>You'll need Matic tokens to interact with the blockchain. You can collect mock Matic tokens from the <a href='https://faucet.polygon.technology/' target='_blank' rel='noreferrer'>Polygon Faucet</a></ol>
              <ol>Select 'Up' or 'Down' to vote as to whether you believe the value of the given crypto currency will rise or fall</ol>
              <ol>Click the 'INFO' button to learn more about a given currency</ol>
              <ol>This application's smart contract has been deployed to <a href='https://mumbai.polygonscan.com/' target='_blank' rel='noreferrer'>Polygon's Mumbai Testnet</a></ol>
              <ol>The contract and its transactions can be viewed <a href='https://mumbai.polygonscan.com/address/0x1570Bbfca7492c2294410b6966609e9b8B2952d8' target='_blank' rel='noreferrer'>here</a></ol>
              <ol>For a breakdown of how this app works, check out the <a href='https://github.com/damonpickett/crypto-voting-dapp' target='_blank' alt='noreferrer'>Github repo</a></ol>
              <ol></ol>
          </ul>
        </div>
        <div className="modal-footer">
        
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;