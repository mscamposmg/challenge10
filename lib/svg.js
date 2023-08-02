const { error } = require("console");

class SVG {
    constructor() {
        this.textElement = "";
        this.shapeType = "";
    }
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeType} ${this.textElement}</svg>`;

    }
    setText(message,colour) {
        if(message.length>3) {
            throw new Error("message must not exceed 3 char!")
        }
        this.textElement = `<text x="150" y="125" fill="${colour}">${message}</text>`;
    }
    setShape(shape) {
        this.shapeType=shape.render();
    }
}

module.exports = SVG;