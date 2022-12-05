// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
      this.pi = Math.PI;
    }
    set diameter(diameter) {
        this.radius=diameter/2
    }
    get diameter() {
        return this.radius*2
    }
    set circumference(circumference) {
        this.diameter=circumference/this.pi
    }
    
    get circumference() {
        return this.pi*this.diameter
    }
    set area (area) {
        this.radius=Math.sqrt(area/this.pi)
    }
    get area () {
        return (this.radius*this.radius)*this.pi
    }

}