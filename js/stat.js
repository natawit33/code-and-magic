'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

function renderRect(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
   ctx.fillRect(x, y , w , h);
}
                                    
window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X+10, CLOUD_Y+10, 'rgba(0, 0, 0, 0.7)');

  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  
  
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', (CLOUD_X+CLOUD_WIDTH)/2, 30);
  ctx.fillText('Список результатов:', ((CLOUD_X+CLOUD_WIDTH)/2)-10, 50);
  
  
  var maxTime = getMaxElement(times);
  
  for (var i = 0; i < names.length; i++) {

    var color = "rgba(0,0,255,"+Math.random()+")";
    if(names[i]=='Вы'){
      color = 'rgba(0,0,255,1)';
    }
    
    renderRect(ctx, CLOUD_X+BAR_GAP + (BAR_GAP+barWidth)*i, CLOUD_HEIGHT-BAR_HEIGHT+(BAR_HEIGHT-(BAR_HEIGHT*times[i]/maxTime))-30, barWidth, BAR_HEIGHT*times[i]/maxTime, color);
    ctx.fillText(names[i], 100, CLOUD_HEIGHT-CLOUD_Y);
}
};

