function Background(gHeight, gWidth) {
  this.groundHeight = gHeight;
  this.groundWidth = gWidth;
};

function Hero(xStart, yStart, startSpeed, width, height){
  this.startSpotX = xStart;
  this.startSpotY = yStart;
  this.megaWidth = width;
  this.megaHeight = height;
  this.speed = startSpeed;
};

$(function() {
  context = document.getElementById('canvas').getContext('2d');

  var canvasHeight = 400;
  var canvasWidth = 600;
  var megaWidth = 10;
  var megaHeight = 25;
  var speed = 5

  var background = new Background(canvasHeight - 350, canvasWidth);
  var megaBoy = new Hero(25, canvasHeight - 75, speed, megaWidth, megaHeight);

  $('body').on('keydown', function onkeypress(e) {
    switch(e.keyCode) {
      case 74:
        direction = 'left';
        megaBoy.startSpotX -= megaBoy.speed;
        break;
      case 75:
        direction = 'down';
        break;
      case 73:
        direction = 'up';
        break;
      case 76:
        direction = 'right';
        megaBoy.startSpotX += megaBoy.speed;
        break;
    }
  });

  window.requestAnimationFrame(function step(timestamp) {
    context.fillStyle = 'white';
    context.fillRect(0,0,canvasWidth, canvasHeight);

    context.fillStyle = 'brown';
    context.fillRect(0, canvasHeight, background.groundWidth, -background.groundHeight);
    context.stroke();

    context.fillStyle = 'black';
    context.fillRect(megaBoy.startSpotX, megaBoy.startSpotY, megaBoy.megaWidth, megaBoy.megaHeight);
    context.stroke();


    window.requestAnimationFrame(step);
  });
});
