import React, { Component } from 'react';

import './App.css';
import web3 from './web3.js';
import contract from './contract.js'

class App extends Component {

  state=  {
    manager: '',
    newlocation: '',
    teamaddress: '',
    location: '',
    balance: '',
    value: 0,
    message: '',
    teamname: '',
    amount: '',
    goal: '',
    judges: '',
    nextjudge: '',
    messageforjudge: '',
    booleanforteamvote: false,
    messageforjudgebyvote: '',
    teamno: '', 
    finalmessage: '',
    messageafterreinitiation: ''
  }

  setLocation = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    //newlocation paSS karni h
    await contract.methods.setlocation("uttarkhand").send({
      from: accounts[0]
    });

    this.setState({ messageafterreinitiation: 'newlocation has been initiated'});
  }

  registeryourteam = async event =>  {
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'really .........'});

    /*console.log(typeof(this.state.teamname));
    console.log(typeof(parseInt(this.state.amount)));
    console.log(this.state.goal);*/

    await contract.methods.register().send({
      from: accounts[0]
    });

    this.setState({ message: 'huh!!!!!!!! so you have registered '});
  };

  checkteamaddress = async event =>   {
    event.preventDefault();
    // teamno pass karna h
    console.log("hi");
    const teamaddress = await contract.methods.checkteamaddress(parseInt(this.state.teamno, 10)).call();
    console.log("bye");
    this.setState({teamaddress: teamaddress});
  }

  makejudge = async event =>  {
    event.preventDefault();
    //this.setState({messageforjudge: 'he has becffffffffffome judge'})
    //pass nextjudge
    const accounts = await web3.eth.getAccounts();
     await contract.methods.makejudge("0xC48Fad7A53408cD439200F1D11fF2Cf384BFdF61").send({
      from: accounts[0]
    });
    this.setState({messageforjudge: 'he has become judge'})

  }

  voteTheTeam = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await contract.methods.checkisvalid(0, this.state.booleanforteamvote).send({
      from: accounts[0]
    });

    this.setState({messageforjudgebyvote: 'your vote has been recorded'});
    /////////////////////////////////////////////////////////////////////

    //await web3.eth.sendTransaction(tx).then(function(tx) {
      //console.log(tx);
    //});
  }

  finalfunction = async event =>  {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await contract.methods.payamount().send({
      from: accounts[0]
    });
    this.setState({finalmessage: 'finalfunction has been called'});
  }

  async componentDidMount() {
    //this.setState({messageforjudge: 'he has becffffffffffome judge'})

    const manager = await contract.methods.manager().call();
    const location = await contract.methods.locationofproject().call();
    const balance = await web3.eth.getBalance(contract.options.address)/1000000000000000000;
    //this.setState({messageforjudge: 'he has become judge'})
    //balance = balance/1000000000000000000;

    this.setState({manager, balance, locationofproject : location});
  }

  

  judgesdetail = async event => {
    event.preventDefault();

    console.log("testing");
    for(var i = 0; ;i++)  {
      const judges = await contract.methods.judges(i).call();
      console.log(judges);
      this.setState({ judges: this.state.judges + (i+1) + '. ' +  judges + "\n"});
    }

  }

  render() {
    return (
      <div>

        <h2>Namami Gange Project Location {this.state.locationofproject} and is being managed by {this.state.manager} and has {this.state.balance} ether in it. If you want to donate money send the money at this address 0x64C6F98a9cE916Ae1dfd642b5103F31Bff108010</h2>
        
        <hr />



        <form onSubmit = {this.registeryourteam}>
          <h4> &nbsp;&nbsp;If you want to register then press this button</h4>
          <div>
            
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>Register</button>
        </form>
        <h1>{this.state.message}</h1>
        <hr />



        <form onSubmit = {this.judgesdetail}>
        <h4> &nbsp;&nbsp;If you want to see judges then press the button </h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h4>{this.state.judges}</h4>
        </form>
        <hr />



        <form onSubmit = {this.checkteamaddress}>
        <h4>&nbsp;&nbsp; check corresponding team address(eg. 0, 1, 2 ...) </h4>&nbsp;&nbsp;
        <input
          value = {this.state.teamno}
          onChange = {event => this.setState({ teamno: event.target.value})}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.teamaddress}</h1>
        </form>
        <hr />



        <form onSubmit = {this.makejudge}>
        <h4> &nbsp;&nbsp;Only manager can call this function to make judges </h4>&nbsp;&nbsp;
        <input
          value = {this.state.nextjudge}
          onChange = {event => this.setState({ nextjudge: event.target.value})}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.messageforjudge}</h1>
        </form>
        <hr />



        <form onSubmit = {this.voteTheTeam}>
        <h4>&nbsp;&nbsp; This field is for judges so that they can vote. First field is for teamno and second one is for vote(true or false)</h4>&nbsp;&nbsp;
        Teamno&nbsp;&nbsp;
        <input
          value = {this.state.teamno}
          onChange = {event => this.setState({teamno: event.target.value})}
        />
        <br></br>&nbsp;&nbsp;
        vote&nbsp;&nbsp;
        <input
          value = {this.state.booleanforteamvote  }
          onChange = {event => this.setState({booleanforteamvote: event.target.value})}
        />
        <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.messageforjudgebyvote}</h1>
        </form>
        <hr/>



        <form onSubmit = {this.finalfunction}>
        <h4>&nbsp;&nbsp; this msg is supposed to call when all the work is done, To pay the amount </h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h4>{this.state.finalmessage}</h4>
        </form>
        <hr />




        <form onSubmit = {this.setlocation}>
        <h4>&nbsp;&nbsp; Only manager can call this function to reinitiate the contract for different location </h4>&nbsp;&nbsp;
        <input
          value = {this.state.newlocation}
          onChange = {event => this.setState({ newlocation: event.target.value})}
        />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Enter</button>
        <h1>{this.state.messageafterreinitiation}</h1>
        </form>
        <hr />

        

      </div>
    );
  }
}

export default App;
