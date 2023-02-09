let gameIsOn = false;
let lastPick = {
    'a': undefined,
    'b': undefined
}
let number_of_cards = 16;
let orderNumber = [];
let colorByIndex = [0, '#581b98', '#fc5185', '#f4fa9c', '#17b978',
    '#1e2a78', '#ffb174', '#40514e', '#f5b5fc'
]
let main_board, cards, play_button;
let time_start, moves;
let resolved_cards=0;
let time_spent, movess;
function setup() {
    noCanvas();
    initializeData();
    initializeBoard();
    playAndResetButton();
    timeAndMoves();
    gameplayMemoryCard();
	finish_game()
}


function removeFromClassName(parentObj, word) {
    let c = parentObj.children;
    let lazy_list;
    for (let i = 0; c[i] != undefined; i++) {
        lazy_list = c[i].className.split(' ');
        c[i].className = '';
        for (name of lazy_list)
            if (name != word && name != '') c[i].className += name + ' ';
    }
}

function removeFromClassNameSO(simpleObj, word) {
    let lazy_list = simpleObj.className.split(' ');
    simpleObj.className = '';
    for (name of lazy_list)
        if (name != word && name != '') simpleObj.className += name + ' ';
}


function existCN(obj, word) {
    return obj.className.indexOf(word)
}

function initializeData() {
    for (let i = 1; i <= number_of_cards / 2; i++) {
        orderNumber.push(i);
        orderNumber.push(i);
    } // an array with elements from 1 to 8 two times
    shuffle(orderNumber, true) // shuffle the numbers
    orderNumber.splice(0, 0, 0)

    // for (let i = 1; i <= number_of_cards / 2; i++) {
    // 	let c=`rgba(${random(100,255)},${random(100,255)},${random(100,255)},255)`
    //     colorByIndex.push(c)
    //     colorByIndex.push(c)
    // } 
    //random no good...
}

function initializeBoard() {
    main_board = document.getElementsByClassName('main_board')[0];
    for (let i = 1; i <= number_of_cards; i++) {
        let card = document.createElement('div');
        card.className = 'card ';
        main_board.appendChild(card)
        let CardOrderNum = document.createElement('p');
        CardOrderNum.innerHTML = orderNumber[i];
        CardOrderNum.style.display = "none";
        card.appendChild(CardOrderNum)

    }

    cards = main_board.children;
    for (let i = 1; i <= number_of_cards; i++) {
        cards[i - 1].style.backgroundColor = colorByIndex[cards[i - 1].children[0].innerHTML];
    }
}

function playAndResetButton() {
    play_button = document.getElementsByClassName('fa-play')[0];
    play_button.addEventListener('click', () => {
        gameIsOn = true;
        time_start = Date.now();
        moves = 0;
        removeFromClassName(document.getElementsByClassName('consoleButtons')[0], 'hidden');
        play_button.className += 'hidden ';
        for (let card of cards) {
            card.className += 'unsolved spinning ';
        }
        setTimeout(() => {
            removeFromClassName(main_board, 'spinning')
        }, 1000);
    })
    reset_button = document.getElementsByClassName('fa-redo')[0];
    reset_button.addEventListener('click', () => {
        gameIsOn = false;
        for (let elem of document.getElementsByClassName('consoleButtons')[0].children) {
            elem.className += 'hidden '
        }
        removeFromClassNameSO(play_button, 'hidden');
        for (let card of cards) {
            card.className += 'spinning '
            setTimeout(() => {
                removeFromClassNameSO(card, 'spinning');
            }, 1000);
            removeFromClassNameSO(card, 'unsolved');
        }
    })
}


function gameplayMemoryCard() {
    for (let i = 1; i <= number_of_cards; i++) {
        cards[i - 1].addEventListener('click', () => {
            if (gameIsOn == true && existCN(cards[i - 1], 'unsolved') != -1) {
                cards[i - 1].className += 'spinning ';
                // console.log(cards[i - 1].className)
                removeFromClassNameSO(cards[i - 1], 'unsolved') //single object
                    // console.log(cards[i - 1].className)
                cards[i - 1].style.backgroundColor = colorByIndex[cards[i - 1].children[0].innerHTML];
                if (lastPick.a == undefined) lastPick.a = cards[i - 1];
                else if (lastPick.b == undefined) {
                    moves++;
                    lastPick.b = cards[i - 1];
                    aInnerValue = lastPick.a.children[0].innerHTML;
                    bInnerValue = lastPick.b.children[0].innerHTML;
                    if (aInnerValue == bInnerValue) {
                        lastPick.a = undefined;
                        lastPick.b = undefined;
                        resolved_cards+=2;
                    } else {
                        removeFromClassNameSO(lastPick.a, 'spinning');
                        removeFromClassNameSO(lastPick.b, 'spinning');
                        // console.log(cards[i - 1].className)
                        lastPick.a.className += 'unsolved ';
                        lastPick.b.className += 'unsolved ';
                        lastPick.a = undefined;
                        lastPick.b = undefined;

                    }
                }
            }
        })
    }
}


function timeAndMoves() {
    time_spent = setInterval(() => {
        let ts_p = document.getElementsByClassName('timeSpent')[0];
        let seconds = (Date.now() - time_start) / 1000;
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        ts_p.innerHTML = `${minutes} minutes ${seconds} seconds`
    }, 1000)
    movess = setInterval(() => {
        document.getElementsByClassName('moves')[0].innerHTML = `${moves} moves`;
    }, 200)
}


function finish_game(){
	checkFinish=setInterval(()=>{
		if(resolved_cards==16){
			clearInterval(time_spent);
			clearInterval(movess);
			clearInterval(checkFinish);
		}
	},1000)
}