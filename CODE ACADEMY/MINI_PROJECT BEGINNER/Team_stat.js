const team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11,
  }],
  _games: [{
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27,
  }],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this._players.push(player);
  },

  addGame(opponent,teamPoints,opponentPoints) {
    const game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(game);
  }

};
// console.log(team._players); //[ { firstName: 'Pablo', lastName: 'Sanchez', age: 11 } ]
// console.log(team._players.firstName);

const Random_poInt = Math.floor(Math.random() * (100 - 1)) + 1;
console.log('point:' ,Random_poInt);


team.addPlayer('satria', 'batang hitam', 29);
team.addPlayer('Steph' , 'Curry', Random_poInt);
team.addPlayer('Lisa' , 'Leslie', Random_poInt);
team.addPlayer('Bugs' , 'Bunny', Random_poInt);
console.log(team._players);


team.addGame('zlatan ibrahim movic' , 24, 99);
team.addGame('kaka' , Random_poInt, Random_poInt);
team.addGame('ronal dinho' , Random_poInt, Random_poInt);
console.log(team._games);
