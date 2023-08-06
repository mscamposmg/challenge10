const SVG = require("./svg");

describe('SVG', () => {
    test('should throw error if render() is called', () => {
      const svg = new SVG();
      expect(svg.render).toThrow('<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">"SVG" C</svg>');
    });
  });