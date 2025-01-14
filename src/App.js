import React, { useEffect, useState } from "react";
import "./App.css";
import { ConnectButton, Modal, Button } from "web3uikit";
import logo from "./images/Moralis.png";
import Coin from "./components/Coin";
import InstructionModal from "./components/InstructionModal";
import {abouts} from './about';
import { useMoralisWeb3Api, useMoralis } from "react-moralis";

const App = () => {
  const [btc, setBtc] = useState(50);
  const [eth, setEth] = useState(30);
  const [link, setLink] = useState(60);
  const [modalPrice, setModalPrice] = useState();
  const Web3Api = useMoralisWeb3Api();
  const {Moralis, isInitialized} = useMoralis();
  const [visible, setVisible] = useState(false);
  const [modalToken, setModalToken] = useState();
  const [instructionModal, setInstructionModal] = useState(false);

  async function getRatio(tick, setPerc) {

    const Votes = Moralis.Object.extend("Votes");
    const query = new Moralis.Query(Votes);
    query.equalTo("ticker", tick);
    query.descending('createdAt');
    const results = await query.first();

    let up = Number(results.attributes.up);
    let down = Number(results.attributes.down);
    let ratio = Math.round(up/(up+down)*100);
    setPerc(ratio);
  };

  useEffect(() => {
    if(isInitialized) {
      getRatio('BTC', setBtc);
      getRatio('ETH', setEth);
      getRatio('LINK', setLink);

      async function createLiveQuery() {
        let query = new Moralis.Query('Votes');
        let subscription = await query.subscribe();
        subscription.on('update', (object) => {

          if(object.attributes.ticker === 'LINK'){
            getRatio('LINK', setLink);
          }else if(object.attributes.ticker === "ETH"){
            getRatio('ETH', setEth);
          }else if(object.attributes.ticker === 'BTC'){
            getRatio('BTC', setBtc);
          }
        })
      }
      createLiveQuery();
    }
  }, [isInitialized])

  useEffect(() => {

    async function fetchTokenPrice() {
      const options = {
        address:
          abouts[abouts.findIndex((x) => x.token === modalToken)].address,
      };
      const price = await Web3Api.token.getTokenPrice(options);
      console.log(price)
      setModalPrice(price.usdPrice.toFixed(2));
    }

    if(modalToken) {
      fetchTokenPrice()
    }

  }, [modalToken]);

  return (
    <>
      <div className="header">
        <div className="logo">
          <a href='https://moralis.io/' target='_blank' rel="noreferrer"><img src={logo} alt="logo" height="50px" /></a>
          Moralis
        </div>
        <ConnectButton />
      </div>
      <div className="instructions">
        Where do you think these tokens are going? Up or Down?
      </div>
      <div className="instructions-modal">
        <InstructionModal instructionModal={instructionModal} setInstructionModal={setInstructionModal}/>
        <Button
          onClick={() => {
            setInstructionModal(true);
          }}
          text="Instructions"
          theme="primary"
          type="button"
          size="large"
        />
      </div>
      <div className="list">
        <Coin 
          perc={btc} 
          setPerc={setBtc} 
          token={"BTC"} 
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin 
          perc={eth} 
          setPerc={setEth} 
          token={"ETH"} 
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin 
          perc={link} 
          setPerc={setLink} 
          token={"LINK"} 
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
      </div>
      <Modal
        isVisible={visible}
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
        title={modalToken}
      >
        <div>
          <span style={{ color: 'black' }}>{`Price: `}</span>
          {modalPrice}$
        </div>
        <div>
          <span style={{ color: 'black' }}>{`About`}</span>
        </div>
        <div>
          {modalToken &&
            abouts[abouts.findIndex((x) => x.token === modalToken)].about}
        </div>
      </Modal>
    </>
  );
};

export default App;
