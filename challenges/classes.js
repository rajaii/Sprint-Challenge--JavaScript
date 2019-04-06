// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker {
    constructor(cubeAttr) {
    this.length = cubeAttr.length;
    this.width = cubeAttr.width;
    this.height = cubeAttr.height;
  }
  volume() {
    const volume = this.length * this.width * this.height;
    return volume;
  }
  surfaceArea() {
    const sA = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    return sA;
  }
}
  
  
  const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  })


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties 
//from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(cAttr) {
        super(cAttr);
    }
    volume() {
        const v = this.length ** 3;
        return v;
    }
    surfaceArea() {
        const sA = (6 * this.length) ** 2;
        return sA;
    }
}
const cube = new CubeMaker({
    length: 2,
})
console.log(cube.volume());
console.log(cube.surfaceArea());