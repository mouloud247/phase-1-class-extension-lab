// Your code here

class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;

    }

    get perimeter() {
        return this.array.reduce(function (acc, curr) { return acc + curr }, 0)
    }
}


class Triangle extends Polygon {
    get isValid() {
        const [side1, side2, side3] = this.array;
        if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side2) {
            return true;
        } else {
            return false;
        }
    }

}

class Square extends Polygon {

    get isValid() {
        for (let i = 0; i < this.array.length - 1; i++) {
            if (this.array[i] === this.array[i + 1]) {
                return true;
            } else {
                return false;
            }
        }
    }

    get area() {
        const side = this.array[0]
        return side * side;

    }

}











console.log(new Polygon([4, 5, 6]).countSides);