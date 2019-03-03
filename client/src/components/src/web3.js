import Web3 from 'web3';

//we are creating a web3 and at the same time we are hijeking(or amke use of) web 3 provider 
//provided by metamask such that we can access the rinkeby network threw the web3 provider provided by metamask
//we are not using the web3 provided by the metamask because it uses previous version of web3 which is based on 
//callback methods and other thing which we dont want to use so we have installed a newer version of web3
//and using that version with the web3 provider of metamask
const web3 = new Web3(window.web3.currentProvider);

export default web3;