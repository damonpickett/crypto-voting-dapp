(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[4],{1009:function(e,t){},1011:function(e,t){},1013:function(e,t){},1142:function(e,t){},1144:function(e,t){},1151:function(e,t){},1152:function(e,t){},1168:function(e,t){},1170:function(e,t){},1178:function(e,t){},1189:function(e,t){},1255:function(e,t,n){},1256:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),o=n(265),a=n.n(o),i=(n(621),n(9)),s=n(37),l=n(1),u=n.n(l),d=(n(622),n(145)),b=n.p+"static/media/Moralis.692d2ad7.png",h=(n(1255),n(93)),j=n(6);var p=function(e){var t=e.perc,n=(e.setPerc,e.token),r=e.setModalToken,o=e.setVisible,a=Object(c.useState)(),l=Object(s.a)(a,2),b=l[0],p=l[1],f=Object(h.d)(),m=Object(h.b)().isAuthenticated;function O(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={contractAddress:"0x1570Bbfca7492c2294410b6966609e9b8B2952d8",functionName:"vote",abi:[{inputs:[{internalType:"string",name:"_ticker",type:"string"},{internalType:"bool",name:"_vote",type:"bool"}],name:"vote",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{_ticker:n,_vote:t}},e.next=3,f.fetch({params:c,onSuccess:function(){console.log("vote succesful")},onError:function(e){alert(e.data.message)}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){p(t<50?"#c43d08":"green")}),[t]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"token",children:n}),Object(j.jsxs)("div",{className:"circle",style:{boxShadow:"0 0 20px ".concat(b)},children:[Object(j.jsx)("div",{className:"wave",style:{marginTop:"".concat(100-t,"%"),boxShadow:"0 0 20px ".concat(b),backgroundColor:b}}),Object(j.jsxs)("div",{className:"percentage",children:[t,"%"]})]}),Object(j.jsxs)("div",{className:"votes",children:[Object(j.jsx)(d.a,{onClick:function(){m?O(!0):alert("Authenticate to Vote")},text:"Up",theme:"primary",type:"button"}),Object(j.jsx)(d.a,{color:"red",onClick:function(){m?O(!1):alert("Authenticate to Vote")},text:"Down",theme:"colored",type:"button"})]}),Object(j.jsx)("div",{className:"votes",children:Object(j.jsx)(d.a,{onClick:function(){r(n),o(!0)},text:"INFO",theme:"translucent",type:"button"})})]})})},f=function(e){return e.instructionModal?Object(j.jsx)("div",{className:"modal",onClick:function(){return e.setInstructionModal(!1)},children:Object(j.jsxs)("div",{className:"modal-canvas",children:[Object(j.jsx)("div",{className:"modal-header",children:Object(j.jsx)("h4",{children:"Instructions"})}),Object(j.jsx)("div",{className:"modal-body",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("ol",{children:"Connect your Ethereum wallet via the 'Connect Wallet' button in the top right corner"}),Object(j.jsx)("ol",{children:"Connenct to Polygon's Mumbai testnet"}),Object(j.jsxs)("ol",{children:["You'll need Matic tokens to interact with the blockchain. You can collect mock Matic tokens from the ",Object(j.jsx)("a",{href:"https://faucet.polygon.technology/",target:"_blank",rel:"noreferrer",children:"Polygon Faucet"})]}),Object(j.jsx)("ol",{children:"Select 'Up' or 'Down' to vote as to whether you believe the value of the given crypto currency will rise or fall"}),Object(j.jsx)("ol",{children:"Click the 'INFO' button to learn more about a given currency"}),Object(j.jsx)("ol",{})]})}),Object(j.jsx)("div",{className:"modal-footer"})]})}):null},m=[{token:"BTC",address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",about:"Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009. Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto\u2019s own words, to allow \u201conline payments to be sent directly from one party to another without going through a financial institution.\u201d Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use."},{token:"ETH",address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",about:"Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum\u2019s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum\u2019s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014."},{token:"LINK",address:"0x514910771AF9Ca656af840dff83E8264EcF986CA",about:"Founded in 2017, Chainlink is a blockchain abstraction layer that enables universally connected smart contracts. Through a decentralized oracle network, Chainlink allows blockchains to securely interact with external data feeds, events and payment methods, providing the critical off-chain information needed by complex smart contracts to become the dominant form of digital agreement. The Chainlink Network is driven by a large open-source community of data providers, node operators, smart contract developers, researchers, security auditors and more. The company focuses on ensuring that decentralized participation is guaranteed for all node operators and users looking to contribute to the network."}],O=function(){var e=Object(c.useState)(50),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(30),a=Object(s.a)(o,2),l=a[0],O=a[1],x=Object(c.useState)(60),y=Object(s.a)(x,2),g=y[0],k=y[1],v=Object(c.useState)(),w=Object(s.a)(v,2),C=w[0],T=w[1],N=Object(h.c)(),E=Object(h.b)(),B=E.Moralis,I=E.isInitialized,F=Object(c.useState)(!1),M=Object(s.a)(F,2),S=M[0],A=M[1],P=Object(c.useState)(),z=Object(s.a)(P,2),V=z[0],_=z[1],D=Object(c.useState)(!1),H=Object(s.a)(D,2),K=H[0],L=H[1];function U(e,t){return q.apply(this,arguments)}function q(){return(q=Object(i.a)(u.a.mark((function e(t,n){var c,r,o,a,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=B.Object.extend("Votes"),(r=new B.Query(c)).equalTo("ticker",t),r.descending("createdAt"),e.next=6,r.first();case 6:o=e.sent,a=Number(o.attributes.up),i=Number(o.attributes.down),s=Math.round(a/(a+i)*100),n(s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(I){var e=function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new B.Query("Votes"),e.next=3,t.subscribe();case 3:e.sent.on("update",(function(e){"LINK"===e.attributes.ticker?U("LINK",k):"ETH"===e.attributes.ticker?U("ETH",O):"BTC"===e.attributes.ticker&&U("BTC",r)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();U("BTC",r),U("ETH",O),U("LINK",k),e()}}),[I]),Object(c.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={address:m[m.findIndex((function(e){return e.token===V}))].address},e.next=3,N.token.getTokenPrice(t);case 3:n=e.sent,console.log(n),T(n.usdPrice.toFixed(2));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}V&&function(){e.apply(this,arguments)}()}),[V]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsxs)("div",{className:"logo",children:[Object(j.jsx)("a",{href:"https://moralis.io/",target:"_blank",rel:"noreferrer",children:Object(j.jsx)("img",{src:b,alt:"logo",height:"50px"})}),"Moralis"]}),Object(j.jsx)(d.b,{})]}),Object(j.jsx)("div",{className:"instructions",children:"Where do you think these tokens are going? Up or Down?"}),Object(j.jsxs)("div",{className:"instructions-modal",children:[Object(j.jsx)(f,{instructionModal:K,setInstructionModal:L}),Object(j.jsx)(d.a,{onClick:function(){L(!0)},text:"Instructions",theme:"primary",type:"button",size:"large"})]}),Object(j.jsxs)("div",{className:"list",children:[Object(j.jsx)(p,{perc:n,setPerc:r,token:"BTC",setModalToken:_,setVisible:A}),Object(j.jsx)(p,{perc:l,setPerc:O,token:"ETH",setModalToken:_,setVisible:A}),Object(j.jsx)(p,{perc:g,setPerc:k,token:"LINK",setModalToken:_,setVisible:A})]}),Object(j.jsxs)(d.c,{isVisible:S,onCloseButtonPressed:function(){return A(!1)},hasFooter:!1,title:V,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{style:{color:"black"},children:"Price: "}),C,"$"]}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{style:{color:"black"},children:"About"})}),Object(j.jsx)("div",{children:V&&m[m.findIndex((function(e){return e.token===V}))].about})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsxs)("p",{children:["This application's smart contract has been deployed to ",Object(j.jsx)("a",{href:"https://mumbai.polygonscan.com/",target:"_blank",rel:"noreferrer",children:"Polygon's Mumbai Testnet"})]}),Object(j.jsxs)("p",{children:["The contract and its transactions can be viewed ",Object(j.jsx)("a",{href:"https://mumbai.polygonscan.com/address/0x1570Bbfca7492c2294410b6966609e9b8B2952d8",target:"_blank",rel:"noreferrer",children:"here"})]}),Object(j.jsxs)("p",{children:["For a breakdown of how this app works, check out the ",Object(j.jsx)("a",{href:"https://github.com/damonpickett/crypto-voting-dapp",target:"_blank",alt:"noreferrer",children:"Github repo"}),"."]})]})]})},x=function(e){e&&e instanceof Function&&n.e(18).then(n.bind(null,1521)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h.a,{appId:"RHrFKg3Aj9aM8jSBDKs4sTb35EC9unxiu33UerPE",serverUrl:"https://3zlepdwtaorz.usemoralis.com:2053/server",children:Object(j.jsx)(O,{})})}),document.getElementById("root")),x()},621:function(e,t,n){},622:function(e,t,n){},887:function(e,t){},917:function(e,t){},957:function(e,t){},959:function(e,t){},979:function(e,t){},981:function(e,t){},993:function(e,t){}},[[1256,5,6]]]);
//# sourceMappingURL=main.c6db7a7d.chunk.js.map