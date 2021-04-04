let main_board = document.getElementsByClassName('main_board')[0];
let cards = main_board.children;
let shape_bit = 4;
if (window.innerWidth / window.innerHeight < 1) shape_bit = 12;
let player1 = true;
let gameIsOn;
for (let card of cards) {
    card.addEventListener('click', () => {
        if (gameIsOn) {
            if (card.children[0] == undefined) {
                if (player1) drawX(card);
                else drawO(card);
                player1 = !player1;
            }
        }
        //if player1==false then he won
        // console.log(player1)

        gameIsOn = !checkFinish();
        if (gameIsOn == false) {
            setTimeout(() => {
                main_board.style.display = 'none';
                let winning_message = document.createElement('h1');
                winning_message.innerHTML = `Player ${player1?2:1} won!`;
                winning_message.className = 'winning_message';
                document.getElementsByClassName('container')[0].appendChild(winning_message)

            }, 3000)
        }
    })
}


function drawX(obj) {
    //draw it yourself
    let content = document.createElement('p');
    content.innerHTML = 'x';
    content.style.display = 'none'
    obj.appendChild(content)
    let instance = (sketch) => {
        let middlePoint, i, j;
        let canvas1;
        sketch.setup = () => {
            canvas1 = sketch.createCanvas(obj.clientWidth - 10, obj.clientHeight - 10);
            canvas1.parent(obj)
            middlePoint = {
                'x': canvas1.width / 2,
                'y': canvas1.height / 2
            }
            i = middlePoint.x - canvas1.width / 4;
            j = middlePoint.y + canvas1.height / 4;
            sketch.noStroke();
            sketch.fill(0)
        }
        sketch.draw = () => {
            if (i <= middlePoint.x + canvas1.width / 4) {
                sketch.ellipse(i, j, shape_bit, shape_bit);
                sketch.ellipse(canvas1.width - i, j, shape_bit, shape_bit);
                i += shape_bit / 4;
                j -= shape_bit / 4;
            } else sketch.noLoop();
        }
    };
    new p5(instance);

}

function drawO(obj) {
    let content = document.createElement('p');
    content.innerHTML = 'o';
    content.style.display = 'none'
    obj.appendChild(content)
    let instance = (sketch) => {
        let middlePoint, radius, angle;
        let canvas1;
        sketch.setup = () => {
            canvas1 = sketch.createCanvas(obj.clientWidth - 10, obj.clientHeight - 10);
            canvas1.parent(obj)
            sketch.noStroke();
            sketch.fill(255);
            middlePoint = {
                'x': canvas1.width / 2,
                'y': canvas1.height / 2
            }
            radius = canvas1.width / 4;
            angle = 0;
        }
        sketch.draw = () => {
            if (angle <= sketch.TWO_PI) {
                let x = middlePoint.x + radius * sketch.cos(angle)
                let y = middlePoint.y + radius * sketch.sin(angle)
                sketch.ellipse(x, y, shape_bit, shape_bit);
                angle += shape_bit / 200;
            } else sketch.noLoop();
        }
    };
    new p5(instance);

}

function checkFinish() {
    let values = Object.values(cards).map(x => {
        if (x.children[0] != undefined) return x.children[0].innerHTML;
        else return undefined;
    });
    for (let i = 0; i < 3; i++) {
        if (values[i * 3] == values[i * 3 + 1] && values[i * 3 + 1] == values[i * 3 + 2] && values[i * 3] != undefined)
            return true;
        if (values[0 + i] == values[3 + i] && values[3 + i] == values[6 + i] && values[0 + i] != undefined)
            return true;
    }
    if (values[0] == values[4] && values[4] == values[8] && values[0] != undefined)
        return true;
    if (values[2] == values[4] && values[4] == values[6] && values[2] != undefined)
        return true;
    return false;
}