let cols, rows;
let w = 10;
let grid = [];
let curent;
let stack = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51)
    cols = int(width / w);
    rows = int(height / w);
    for (let j = 0; j <= rows; j++)
        for (let i = 0; i <= cols; i++) {
            grid.push(new Cell(i, j, w));
        }
    curent = grid[0];
}


function draw() {
  if(frameCount%50==0){
        background(51);
        for (let cell of grid) {
            cell.show();
        }

  }
    for (let i = 0; i <= 25; i++) {
        curent.visited = true;
        curent.highlight();
        next = curent.checkNeighbors();
        if (next) {
            next.visited = true;
            stack.push(curent);
            removeWalls(curent, next);
            curent = next;
        } else if (stack.length > 0) {
            curent = stack.pop();

        }
    }
}


function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x == 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x == -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    y = a.j - b.j;
    if (y == 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y == -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}