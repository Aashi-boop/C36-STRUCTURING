class Form 
{
  constructor() 
  {
    
  }

  display()
  {
    fill("red");

    //creating html elements and positioning them
    var title = createElement('h2')
    title.html("Car Racing Game");    //writing in html format
    title.position(130, 0);
    
    var input = createInput("Name");
    input.position(130, 160);

    var button = createButton('Play');
    button.position(250, 200);
    
    
    button.mousePressed(function(){
      input.hide();
      button.hide();

      var name = input.value();
      
      myplayerCount+=1;
      myplayer.update(name)
      myplayer.updateCount(myplayerCount);

      var greeting = createElement('h3');
      greeting.html("Hello " + name )
      greeting.position(130, 160)
    });

  }
}
