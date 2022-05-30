import React, { useEffect, useState } from "react";
import "./Coin.css";


function Coin({perc, setPerc, token}) {



  return (
    <>
      <div>
        <div className="token">
          {token}
        </div>
        <div className="circle" style={{boxShadow: `0 0 20px green`}}>
          <div className="wave"
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px green`,
              backgroundColor: 'green',
            }}

          ></div>
          <div className="percentage">
            {perc}
          </div>
        </div>
      </div>
    </>
  );
}

export default Coin;
