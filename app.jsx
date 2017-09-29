const Header = ({players}) => {
  return (
    <div className='header'>

      <div className='scoreboard'>
        <table>
          <tbody className='stats'>
            <tr>
              <td>PLAYERS: </td>
              <td><h1>{players.length}</h1></td>
            </tr>
            <tr>
              <td>TOTAL POINTS: </td>
              <td><h1>{sum(players)}</h1></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='stopwatch' >
        <h2>STOPWHATH</h2>
        <h1 className='stopwatch-time'>0</h1>
        <button>START</button>
        <button>RESET</button>
      </div>
    </div>
  );
};

const PlayerList = ({players}) => {
  return (
    <div>
      <ul>{getPlayers(players)}</ul>
    </div>
  );
}

const PlayerForm = ({}) => {
  return (
    <div>
      <form>
        <input type="text" placeholder="ENTER A NAME"/>
        <button>ADD PLAYER</button>
      </form>
    </div>
  );
};

function sum (players) {
  return players.map(player => { return player.score;}).reduce((playerA,playerB)=>{
    return (playerB + playerA);
  });
};

function getPlayers (players) {
  return players.map((player, index) => {
    return (
      <li key={index}>
        <p>{player.name}</p>
        <button>-</button>
        <p>{player.score}</p>
        <button>+</button>
      </li>
    );
  });
}

let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
   {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
   {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const Application = ({title, players}) => {
  return (
  <div>
    <Header players={players}/>
    <PlayerList players={players}/>
    <PlayerForm/>
  </div>
  ) ;
}

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));