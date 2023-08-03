const SVG = require("./svg");

describe('SVG', () => {
    test('should throw error if render() is called', () => {
      const svg = new SVG();
      const err = new Error('Child class must implement a render() method.')
      expect(svg.render).toThrow(err);
    });
  });