//const { describe, test } = require("node:test");
const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
    test('Should accept a fillcolor param', () => {
        const shape = new Square();
        shape.defineShapeColour("blue");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<rect x="90" y="40" width="120" height="120" fill="blue" />`);
    });

    test('Should get greenSquare', () => {
        const shape = new Square();
        shape.defineShapeColour("green");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<rect x="90" y="40" width="120" height="120" fill="green" />`);
    });
});

describe("Triangle", () => {
    test('Should throw error if render() is called', () => {
        const shape = new Triangle();
        shape.defineShapeColour("blue");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />`);
    });

    test('Should get greenSquare', () => {
        const shape = new Triangle();
        shape.defineShapeColour("green");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="green" />`);
    });
});

describe("Circle", () => {
    test('Should throw error if render() is called', () => {
        const shape = new Circle();
        shape.defineShapeColour("blue");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
    });

    test('Should get greenSquare', () => {
        const shape = new Circle();
        shape.defineShapeColour("green");
        const actualSvg = shape.render()
        expect(actualSvg).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
    });
});