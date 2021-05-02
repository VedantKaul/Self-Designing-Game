var player, gameState, game, form;

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  gameState = database.ref("gameState");
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  
  if(gameState === 1){
  play();
  }

}