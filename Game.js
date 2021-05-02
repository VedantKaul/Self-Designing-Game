class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
            })
        }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = database.ref("PlayerCount");
         if(playerCountref.exists()){
         playerCount = playerCountref.val();
         player.getCount();   
         }
        form = new Form();
        form.display();
        }
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
            gameState = 1;
                
            
                player1.x = database.ref("players/player1/x");
                player1.y = database.ref("players/player1/y");
                player1 = createSprite(x, y, 50, 50);

                player2.x = database.ref("players/player2/x");
                player2.y = database.ref("players/player2/y");
                player2 = createSprite(x, y, 50, 50);

                ball.x = database.ref("ball/x");
                ball.y = database.ref("ball/y");
                ball = createSprite(140, 200, 20, 20);

                ring = createSprite(120, 120, 20, 20);
    }
    drawSprites();
} 