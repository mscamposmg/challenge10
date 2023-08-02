const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { type } = require("os");

class CLI {
    
    run() {
        return inquirer
        .prompt([
            {
            type: "input",
            name: "text",
            message: "Up to 3 letters per logo"
        },
        {
            type: "input",
            name: "textColor",
            message: "2 options: hexa or colour's name",
        },
        {
            type: "list",
            name: "shapeType",
            message: "3 options of shape for your logo",
            choices: ["Circle", "Triangle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "2 options: hexa or colour's name"
        },
        
        ])
        .then(({ text, textColor, shapeType, shapeColor }) => {
            let shape;
            switch(shapeType) {
                case "circle": 
                shape = new Circle();
                break;
            }
            const svg = new SVG();
            svg.setShape(shape)
            svg.setText(text,textColor)
            return writeFile("logo.svg",svg.render())
        })
        .then(() => {})
        .catch(() => {});
    }
}

module.exports = CLI;