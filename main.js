//bless me
size_x = view.size.width;
size_y = view.size.height;
var offset = 50;

//сааамый главный угол
var alpha = 2 * Math.PI / 5;

//пусть центр будет в центре
//##################################################################
center_x = paper.view.center.x;
center_y = paper.view.center.y;
view.translate([center_x, center_y]);
view.update();
//##################################################################


// draw x_axis and y-axis
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
var from = new Point(0, 0);
var to = new Point(0, 500);
var x_axis = new Path.Line(from - to, to);
// x_axis.strokeColor = 'black';

var from = new Point(0, 0);
var to = new Point(1000, 0);
var y_axis = new Path.Line(from - to, to);
// y_axis.strokeColor = 'black';
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
//

//controls
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
    console.log(event.point, paper.view.center);

}

function onMouseUp(event) {
    // the position of the mouse when it is released
    console.log(event.point);
}
//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//so... pentagrids
// Create a point-text item at {x: 30, y: 30}:

//#######################################################
// прямую через (0,0) с напр (a_x, a_y):

//#######################################################



//#######################################################
//draw rectang
var from = new Point(-size_x / 2 + offset, -size_y / 2 + offset);
var to = new Point(size_x / 2 - offset, -size_y / 2 + offset);
var rect_up = new Path.Line(from, to);
rect_up.strokeColor = 'black';

var from = new Point(-size_x / 2 + offset, size_y / 2 - offset);
var to = new Point(size_x / 2 - offset, size_y / 2 - offset);
var rect_down = new Path.Line(from, to);
rect_down.strokeColor = 'black';

var from = new Point(-size_x / 2 + offset, -size_y / 2 + offset);
var to = new Point(-size_x / 2 + offset, size_y / 2 - offset);
var rect_left = new Path.Line(from, to);
rect_left.strokeColor = 'black';

var from = new Point(size_x / 2 - offset, -size_y / 2 + offset);
var to = new Point(size_x / 2 - offset, size_y / 2 - offset);
var rect_right = new Path.Line(from, to);
rect_right.strokeColor = 'black';
//#######################################################

function line_fun(A_x, A_y, c, x) {
    this.a = A_y;
    this.b = A_x;
    if (b !== 0)
        return (this.a * x + c) / -this.b;
}

function draw_line(a_x, a_y, c) {
    this.x = size_x - offset;
    var from = new Point(-this.x, line_fun(a_x, a_y, c, -this.x));
    var to = new Point(this.x, line_fun(a_x, a_y, c, this.x));
    var line = new Path.Line(from, to);
    line.strokeColor = 'red';
}

//#######################################################
//#######################################################

var spacing = 50;

var s = [];
s[0] = Math.floor((Math.random() * spacing));
s[1] = Math.floor((Math.random() * spacing));
s[2] = Math.floor((Math.random() * spacing));
s[3] = Math.floor((Math.random() * spacing));
s[4] = - s[0] - s[1] - s[2] - s[3];


for(var i=0; i<2; i++){
for (var j = -10; j < 10; j++) {
    draw_line(Math.cos(i * alpha), Math.sin(i * alpha), s[i] - j * spacing);
}
}



// draw_line(1,1);
// draw_line(1,1);
