
class Point {
  x: number;
  y: number;

  draw() {
    console.log('X: '+ this.x +'Y: ' + this.y)
  }

  getDistance(anotherPoint: Point) {

  }
}

let point: Point;

point.draw();
