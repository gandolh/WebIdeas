let cols, rows;
let w = 80;
let grid = [];
let curent;
let stack = [];
let finished = false;
let playable = false;
let cooldown = 5,
    cooldown_value = 5;
let mouse_compatibility = false; // check for big movements
// of last  click positions with mobile devices

let goal; //the finish line 
let go = false;
let score = 0;
let settings = document.getElementsByClassName('settings')[0];
let div_maze = document.getElementsByClassName('maze')[0];
let sq_size_input = document.getElementById('sq_size');
let go_button = document.getElementById('go_button');
let score_div= document.getElementById('score');
score_div.innerHTML=score;

function setup() {
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent(div_maze)
    div_maze.style.display = 'none';
    go_button.addEventListener('click', () => {
        w = int((sq_size_input.value || sq_size_input.placeholder));
        settings.style.display = 'none';
        div_maze.style.display = 'block';
        initializeGrid();
        go = true;


    })
}


function draw() {
    if (go) {
        translate((width - w * cols) / 2, (height - w * (rows + 1)) / 2)
        generate_maze();
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

function touchMoved(event) {
    if (mouse_compatibility == true) {
        x_modify = pmouseX - mouseX;
        y_modify = pmouseY - mouseY;
        error_handle = 5;
        if (cooldown > cooldown_value) {
            if (x_modify > error_handle) { //left
                let ind = index(curent.i - 1, curent.j, cols)
                if (ind != -1 && curent.walls[3] == false) curent = grid[ind]
                cooldown = 0;
                // console.log('a')

            }
            if (x_modify < -error_handle) { //right
                let ind = index(curent.i + 1, curent.j, cols)
                if (ind != -1 && curent.walls[1] == false) curent = grid[ind]
                cooldown = 0;
                // console.log('d')

            }
            if (y_modify > error_handle) { //up
                let ind = index(curent.i, curent.j - 1, cols)
                if (ind != -1 && curent.walls[0] == false) curent = grid[ind]
                cooldown = 0;
                // console.log('s')

            }
            if (y_modify < -error_handle) { //down
                let ind = index(curent.i, curent.j + 1, cols)
                if (ind != -1 && curent.walls[2] == false) curent = grid[ind]
                cooldown = 0;
                // console.log('w')

            }
        }

    }
}


function generate_maze() {

    if (playable == true) { //if the player could start play it
        let player = curent;
        background('#fff4e3');
        for (let cell of grid) {
            cell.show();
        }
        player.highlight();
        goal.MarkAsFinishLine();
        if (cooldown > cooldown_value) {
            if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
                let ind = index(curent.i - 1, curent.j, cols)
                if (ind != -1 && curent.walls[3] == false) curent = grid[ind]
                cooldown = 0;

            }
            if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
                let ind = index(curent.i + 1, curent.j, cols)
                if (ind != -1 && curent.walls[1] == false) curent = grid[ind]
                cooldown = 0;

            }
            if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
                let ind = index(curent.i, curent.j - 1, cols)
                if (ind != -1 && curent.walls[0] == false) curent = grid[ind]
                cooldown = 0;

            }
            if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
                let ind = index(curent.i, curent.j + 1, cols)
                if (ind != -1 && curent.walls[2] == false) curent = grid[ind]
                cooldown = 0;

            }
        }
        cooldown++;
        if (goal == player) {
            score++;
            goal = grid[Math.floor(random(grid.length - 1))];
            score_div.innerHTML=score;
        }
    } else { //if it is generating
        if (finished == true) { //if generation is done draw it
            background('#fff4e3');
            for (let cell of grid) {
                cell.show();
            }
            playable = true;
        } else { // if the generation is not done backtracking go brr
            for (let i = 0; i <= rows; i++) {
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
            if (curent == grid[0]) { //checking that the backtracking is done
                finished = true;
            }
        }
    }

    if (mouseIsPressed) {
        mouse_compatibility = true;
    } else {
        mouse_compatibility = false;
    }
}


function initializeGrid() {
    cols = int(width / w) - 1;
    rows = int(height / w) - 1;
    for (let j = 0; j <= rows; j++)
        for (let i = 0; i <= cols; i++) {
            grid.push(new Cell(i, j, w));
        }
    curent = grid[0];
    goal = grid[Math.floor(random(grid.length - 1))];

}