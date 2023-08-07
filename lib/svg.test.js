const SVG = require("./svg");

describe('SVG', () => {
    test('Should render or output a svg with 300 width and 200 height', () => {
      const newSVG = new SVG();
      const expectedSvg = '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>';
  

     expect(newSVG.render()).toEqual(expectedSvg);
    });

    
  });

