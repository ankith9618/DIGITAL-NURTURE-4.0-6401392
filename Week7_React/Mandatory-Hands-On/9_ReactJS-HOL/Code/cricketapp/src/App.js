import './App.css';

import {players} from './Players.js';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import { IndianPlayers,IndianTeam ,OddPlayers,EvenPlayers} from './IndianPlayers.js';
import ListofIndianPlayers from './ListofIndianPlayers.js';

function App() {

  
  var flag = false;
  if(flag===true){
    return (
      <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players}/>
          <hr/>
          <h1>List Of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players}/>
      </div>
    );
  }
  else{
    return (
      <div>
          <div>
              <h1>Indian Team</h1>
              <h1>Odd Players</h1>
              {OddPlayers(IndianTeam)}
              <hr/>
              <h1>Even Players</h1>
              {EvenPlayers(IndianTeam)}
          </div>
          <hr/>
          <div>
              <h1>List Of Indian Players Merged</h1>
              <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
          </div>
      </div>
    );
  }
}

export default App;
