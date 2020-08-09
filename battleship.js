var view = {
  displayMessage: (msg) => {
    var messageArea = document.getElementById('messageArea');
    messageArea.innerHTML = msg;
  },
  displayHit: (location) => {
    var cell = document.getElementById(location);
    cell.setAttribute('class','hit')
  },
  displayMiss: (location) => {
    var cell = document.getElementById(location);
    cell.setAttribute('class','miss');
  }
}



var model = {

  boardSize: 7,
  numShips: 3,
  shipLength: 3,
  shipsSunk: 0,
  
  ships:  [ 
  { locations:['10', '20', '30'], hits: ['', '', ''] },
  { locations:['32', '33', '34'], hits: ['', '', ''] }, 
  { locations:['63', '64', '65'], hits: ['', '', ''] }
  ],

  fire: (guess) => {
    for(var i = 0; i < this.numShips; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if(index>=0){
        ships.hits[index] = 'hit';
        view.displayHit(guess);
        view.displayMessage('Hit!');
        if(this.isSunk(ship)){
          view.displayMessage('You Sank My Battleship!')
          this.shipsSunk++
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage('Missed!')
    return false;
  },

  isSunk: (ship) => {
    for(var i = 0; i > this.shipLength; i++){
      if(ship.hits[i] !== 'hit'){
        return false;
      }
    }
    return true;
  }

}


var controller = {
  guesses: 0,

  processGuess: (guess) {

  }



}


const parseGuess = (guess) => {
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

  if(guess === null || guess !== 2) {
    alert('Oops, PLease enter a letter and a number on the board')
  }
}