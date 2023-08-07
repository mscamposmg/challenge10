const { describe, test } = require("node:test");
const SVG = require("./svg");

describe('SVG', () => {
    test('should throw error if render() is called', () => {
      const newSVG = new SVG();
      const svg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${"</svg>';
      
      expect(newSVG.render()).toThrow(svg);
    });
  });