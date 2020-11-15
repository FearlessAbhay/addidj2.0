function preload(){
    music = loadSound("sneeze-dj-style-mp4-51607.mp3");
  }
  
  function setup() {
      cnv = createCanvas(400, 400);
     cnv.mousePressed(canvasPress);
  }
  
  function check(){
     
    
    
  }
  function stop_music(){
    music.stop();
  }
  
  function draw() {
    background(220);
  }
  
  function canvasPress(){
    music.play();
  }
  
  function play()
  {
      music.play();
      music.setVolume(Volume);
  }
    