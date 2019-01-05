const colours = ['#000000', '#FF0000', '#FFA500', '#008000', '#0000FF', '#800080', '#FFC0CB', '#808080', '#FA8072', '#FFD700', '#90EE90', '#00FFFF', '#ADD8E6', '#E6E6FA', '#FFE4E1'];
let holdColor;

//HTML Addons

//Erase Button
const eraseButton = document.createElement('div');
eraseButton.className = "erase";
eraseButton.innerHTML = "Erase";
pixelPainter.appendChild(eraseButton);

//Clear Button
const clearButton = document.createElement('div');
clearButton.className = "clear";
clearButton.innerHTML = "Clear";
pixelPainter.appendChild(clearButton);


// Color Grid
const colorGrid = document.createElement('div')
colorGrid.className = "color-grid";
pixelPainter.appendChild(colorGrid);

//Canvas Colors

const colorCanvas = function () {
  for (var i = 0; i < colours.length; i++) {
    const colorSet = document.createElement('div');
    colorSet.className = "colours";
    colorSet.id = colours[i];
    colorSet.style.backgroundColor = colours[i];
    colorGrid.appendChild(colorSet);
    colorSet.addEventListener('click', function (evt) {
      holdColor = evt.target.id;
    });
  };
};
colorCanvas();

// Grid Canvas
const gridBoard = document.createElement('div');
gridBoard.id = "board";
pixelPainter.appendChild(gridBoard);
//TO DO: can make a function out of this later
let down = false;

const makeGrids = function (x, y) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < y; columns++) {
      const gridCanvas = document.createElement('div');
      gridCanvas.className = "grid";
      gridBoard.appendChild(gridCanvas);
      gridCanvas.addEventListener('click', function (evt) {
        gridCanvas.style.backgroundColor = holdColor;
      });

      //Paint with holding mouse
      gridCanvas.addEventListener('mousedown', function (evt) {
        down = true;
      });
      gridCanvas.addEventListener('mouseup', function () {
        down = false;
      });
      gridCanvas.addEventListener('mouseover', function (evt) {
        if (down === true) {
          gridCanvas.style.backgroundColor = holdColor;
        };
      });
      //Clear
      const letsClear = clearButton.addEventListener('click', function () {
        gridCanvas.style.backgroundColor = "white"
      });
      // Eraser
      const eraser = eraseButton.addEventListener('click', function () {
        // target.style.backgroundColor = null;
      })
      gridCanvas.addEventListener('mouseup', function () {
        down = false;
      })
      gridCanvas.addEventListener('mousedown', function () {
        down = true;
      })
      gridCanvas.addEventListener('mouseover', function () {
        if (down === false) {
          gridCanvas.style.backgroundColor = null;
        }
      })
    };
  };
};
makeGrids(25, 25);






