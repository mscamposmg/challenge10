const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
//const { type } = require("os");

class CLI {
    
    run() {
        return inquirer
        .prompt([
            {
            type: "input",
            name: "text",
            message: "Enter the text for the logo. (Up to 3 characters)"
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter text color",
        },
        {
            type: "list",
            name: "shapeType",
            message: "Select a shape for the logo:",
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the shape color:",
        },
        
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch(shapeType) {
                case "Circle":
                    shape = new Circle();
                    break;
                case "Triangle":
                    shape = new Triangle();
                    break;
                case "Square":
                    shape = new Square();
                    break;
            }
            shape.defineShapeColour(shapeColor)
            const svg = new SVG();
            svg.setShape(shape);
            svg.setText(text, textColor);
            return writeFile("logo.svg",svg.render());
        })
        .then(() => console.log('Generated logo.svg'))
        .catch((err) => {
            console.log(err);
            console.log('Oops. Something went wrong.');
        });
    }
}

module.exports = CLI;