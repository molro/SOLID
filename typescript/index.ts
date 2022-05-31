// Single Responsability
// Cada clase tiene un sólo trabajo

class Square {
    lado?: number;
    constructor (lado : number) {
        this.lado = lado
    }

    getLado() {
        return this.lado;
    }
}

class Circle {
    radius?: number;
    constructor (radius: number) {
        this.radius = radius
    }

    getRadius () {
        return this.radius;
    }
}

//Calcula el area de todas las figuras (1 Función)
/* class AreaCalc {
    protected figuras?: number[];

    constructor (figuras: number[]) {
        this.figuras = figuras;
    }

    getArea() {
        this.figuras.forEach(e => {
             
        })
    }
}*/

let square1 = new Square(10)
let circle1 = new Circle(3)

console.log(square1.constructor.name)
console.log(square1.getLado(), circle1.getRadius())