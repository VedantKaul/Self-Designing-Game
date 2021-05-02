class Player{
  constructor(){}

  updateCount(count){
  database.ref('/').update({
    playerCount: count
  });
  }

  update(){
  var playerIndex = "player" + this.index;
  database.ref(playerIndex).set({
  name: this.name
  })
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}