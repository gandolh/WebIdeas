let main_board = document.getElementsByClassName('main_board')[0];
let cards = main_board.children;
let shape_bit=4;
if(window.innerWidth/window.innerHeight<1)shape_bit=12;
let player1 = true;

for (let card of cards) {
    card.addEventListener('click', () => {
        if (card.children[0] == undefined) {
            if (player1) drawX(card);
            else drawO(card);
            player1 = !player1;
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
                i+=shape_bit/4;
                j-=shape_bit/4;
            }
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
            radius=canvas1.width/4;
            angle=0;
        }
        sketch.draw = ()=>{
            if (angle <= sketch.TWO_PI) {
                let x = middlePoint.x + radius * sketch.cos(angle)
                let y = middlePoint.y + radius * sketch.sin(angle)
                sketch.ellipse(x, y, shape_bit, shape_bit);
                angle += shape_bit / 200;
            }
        }
    };
    new p5(instance);

}