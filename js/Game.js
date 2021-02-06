class Game 
{
    constructor()
    {

    }
    
    readState()      //read gamestate from db
    { 
      var gameStateRef  = mydatabase.ref('gameState');
      gameStateRef.on("value",function(data){
        mygameState = data.val();              //var gamestate of sketch
      })
    
    }

   /* update(state)
    {
      mydatabase.ref('/').update({
        gameState: state          //db gamestate
      });
    }
  */
    start()
    {
      if(mygameState === 0)  //waiting gs
      {     
        myplayer = new Player();  //new player is created
        myplayer.readPlayerCount();

        myform = new Form()  // new form is displayed
        myform.display();
      }
    }
}
