const { describe, test } = require("node:test");
const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
    test('Should throw error if render() is called', () => {
        const square = new Square();
        const err = new Error('Child class must implement a render() method.')
        expect(square.render).toThrow(err);
    });
});
describe("Triangle", () => {
    test('Should throw error if render() is called', () => {
        const triangle = new Triangle();
        const err = new Error('Child class must implement a render() method.')
        expect(triangle.render).toThrow(err);
    });
});
describe("Circle", () => {
    test('Should throw error if render() is called', () => {
        const circle = new Circle();
        const err = new Error('Child class must implement a render() method.')
        expect(circle.render).toThrow(err);
    });
});