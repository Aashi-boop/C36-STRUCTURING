class Player 
{
    constructor()
    {
      
    }

    readPlayerCount()
    {
      var playerCountRef = mydatabase.ref('playerCount');
      playerCountRef.on("value",function(data){
        myplayerCount = data.val();
      })
    }

     update(pname)
    {
      var playerIndex = "player" + myplayerCount;   //player1
      mydatabase.ref(playerIndex).set({             // creating new node as player1
        name: pname
      });
    }

    updateCount(pcount)
    {
      mydatabase.ref('/').update({
        playerCount: pcount
      });
    }

   
    
}
