let gameIsOn = false;
let lastPick = {
    'a': undefined,
    'b': undefined
}

function setup() {
    noCanvas();
    /* DECLARATIVE ZONE */
    let number_of_cards = 16;
    let orderNumber = [];
    for (let i = 1; i <= number_of_cards / 2; i++) {
        orderNumber.push(i);
        orderNumber.push(i);
    } // an array with elements from 1 to 8 two times
    shuffle(orderNumber, true) // shuffle the numbers
    orderNumber.splice(0, 0, 0)
    let colorByIndex = [0, '#581b98', '#fc5185', '#f4fa9c', '#17b978',
        '#1e2a78', '#ffb174', '#40514e', '#f5b5fc'
    ]

    // for (let i = 1; i <= number_of_cards / 2; i++) {
    // 	let c=`rgba(${random(100,255)},${random(100,255)},${random(100,255)},255)`
    //     colorByIndex.push(c)
    //     colorByIndex.push(c)
    // } 
    //random no good...

    /*	END OF DECLARATIVE ZONE */
    /*	
    CREATE board style
    */
    let main_board = document.getElementsByClassName('main_board')[0];
    for (let i = 1; i <= number_of_cards; i++) {
        let card = document.createElement('div');
        card.className = 'card ';
        main_board.appendChild(card)
        let CardOrderNum = document.createElement('p');
        CardOrderNum.innerHTML = orderNumber[i];
        CardOrderNum.style.display = "none";
        card.appendChild(CardOrderNum)

    }

    let cards = main_board.children;
    for (let i = 1; i <= number_of_cards; i++) {
        cards[i - 1].style.backgroundColor = colorByIndex[cards[i - 1].children[0].innerHTML];
    }
    /* 
    end of generating the board
    */
    /* 
    starting the game
    */
    let play_button = document.getElementsByClassName('fa-play')[0];
    play_button.addEventListener('click', () => {
            gameIsOn = true;
            removeFromClassName(document.getElementsByClassName('consoleButtons')[0], 'hidden');
            play_button.className += ' hidden';
            for (let card of cards) {
                card.className += 'unsolved spinning';
            }
            setTimeout(() => {
                removeFromClassName(main_board, 'spinning')
            }, 1000);
        })
        /* end of the main buttons console*/
        /* searching pairs*/
    for (let i = 1; i <= number_of_cards; i++) {
        cards[i - 1].addEventListener('click', () => {
            if (gameIsOn == true) {
                cards[i - 1].className += 'spinning';
                removeFromClassNameSO(cards[i - 1], 'unsolved') //single object
                cards[i - 1].style.backgroundColor = colorByIndex[cards[i - 1].children[0].innerHTML];
                if (lastPick.a == undefined) lastPick.a = cards[i - 1];
                else if (lastPick.b == undefined) {
                    lastPick.b = cards[i - 1];
                    aInnerValue = lastPick.a.children[0].innerHTML;
                    bInnerValue = lastPick.b.children[0].innerHTML;
                    if (aInnerValue == bInnerValue) {
                        lastPick.a = undefined;
                        lastPick.b = undefined;
                    } else {
                        setTimeout(() => {
                            removeFromClassNameSO(lastPick.a, 'spinning');
                            removeFromClassNameSO(lastPick.b, 'spinning');
                        	lastPick.a.className += 'unsolved';
                        	lastPick.b.className += 'unsolved';
                        	lastPick.a = undefined;
                        	lastPick.b = undefined;
                        },1000)

                    }
                }
            }
        })
    }

}



function removeFromClassName(parentObj, word) {
    let c = parentObj.children;
    let lazy_list;
    for (let i = 0; c[i] != undefined; i++) {
        lazy_list = c[i].className.split(' ');
        c[i].className = '';
        for (name of lazy_list)
            if (name != word) c[i].className += name + ' ';
    }
}

function removeFromClassNameSO(simpleObj, word) {
    let lazy_list = simpleObj.className.split(' ');
    simpleObj.className = '';
    for (name of lazy_list)
        if (name != word) simpleObj.className += name + ' ';
}