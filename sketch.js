//1 creating global var

var mygameState = 0;
var myplayerCount=0;

var mydatabase;

var myform, myplayer, mygame;


function setup()
{
  createCanvas(400,400);
  mydatabase = firebase.database();  //2 creating db
  
  mygame = new Game();    //3 object of game cls and its methods
  mygame.readState();
  mygame.start();
}


function draw()
{
  
}
