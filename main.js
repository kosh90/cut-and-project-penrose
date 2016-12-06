//bless me
function onKeyDown(event) {
  if (event.key == 'up') {
    view.translate([0, 50]);
		view.update();
  }

  if (event.key == 'down') {
    view.translate([0, -50]);
  }
  if (event.key == 'left') {
    view.translate([50, 0]);
  }
  if (event.key == 'right') {
    view.translate([-50, 0]);
  }
}

function onMouseDrag(event) {
    // the position of the mouse when it is dragged
    console.log(event.point);
}

function onMouseUp(event) {
    // the position of the mouse when it is released
    console.log(event.point);
}
//so... pentagrids
// Create a point-text item at {x: 30, y: 30}:

//#######################################################
//#######################################################

var text_pos = new PointText(new Point(1030, 30));
text_pos.fillColor = 'black';
text_pos.content = 'Move your mouse over the view, to see its position';

function onMouseMove(event) {
    // Each time the mouse is moved, set the content of
    // the point text to describe the position of the mouse:
    text_pos.content = 'Your position is: ' + event.point.toString();
}

//#######################################################
//#######################################################

var text_cent = new PointText(new Point(1030, 60));
text_cent.fillColor = 'black';
text_cent.content = 'Move your mouse over the view, to see its paper.view.center';

function onMouseMove(event) {
    // Each time the mouse is moved, set the content of
    // the point text to describe the position of the mouse:
    text_cent.content = 'Your center is: ' + paper.view.center.toString();
}

//#######################################################
//#######################################################

from = [0,0];
to = [paper.view.center.x, paper.view.center.y];
var line = new Path.Line(from, to);
line.strokeColor = 'black';

var pentagrid = new Path.Line ([0,0], [100,100]);
pentagrid.strokeColor = 'salmon';

view.translate([0, 100]);
view.update();
