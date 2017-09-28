const Header = ({players}) => {
  return (
    <div>
      <div>
        <p>PLAYERS: {players.length}</p>
        <p>TOTAL POINTS: {sum(players)}</p>
      </div>
      <div>
        <p>STOPWHATH</p>
        <p>0</p>
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
  </div>
  ) ;
}
    // <PlayerForm/>

ReactDOM.render(<Application title="Scoreboard" players = {PLAYERS}/>, document.getElementById('container'));