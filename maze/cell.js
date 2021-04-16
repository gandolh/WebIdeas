let floorColor = '#fff4e3';
let wallColor = '#002651';
let stroke_w = 3;
class Cell {
    constructor(i, j, w) {
        this.i = i;
        this.j = j;
        this.w = w;
        this.walls = [true, true, true, true];
        //top right bottom left
        this.visited = false;
    }
    show() {
        let x = this.i * this.w;
        let y = this.j * this.w;
        strokeWeight(stroke_w)
        stroke(wallColor)
        if (this.walls[0]) line(x, y, x + w, y)
        if (this.walls[1]) line(x + w, y, x + w, y + w)
        if (this.walls[2]) line(x + w, y + w, x, y + w)
        if (this.walls[3]) line(x, y + w, x, y)

        if (this.visited) {
            noStroke();
            fill(floorColor)
            rect(x, y, this.w, this.w);
        }
    }
    checkNeighbors() {
        let neighbors = [];
        cols = int(width / this.w);
        let top = grid[index(this.i, this.j - 1, cols)]
        let right = grid[index(this.i + 1, this.j, cols)]
        let bottom = grid[index(this.i, this.j + 1, cols)]
        let left = grid[index(this.i - 1, this.j, cols)]
        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else return undefined;
    }

    highlight() {
        let x = this.i * this.w;
        let y = this.j * this.w;
        noStroke();
        fill(0, 255, 0, 120)
        rect(x, y, this.w, this.w)
    }
    MarkAsFinishLine() {
        let x = this.i * this.w;
        let y = this.j * this.w;
        noStroke();
        fill('#fc5185')
        rect(x, y, this.w, this.w)
    }
}

function index(i, j, cols) {
    if (i < 0 || j < 0 || i > cols || j > rows)
        return -1;
    return i + j * (cols + 1);
}