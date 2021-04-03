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
    let colorByIndex=[0,'#581b98','#fc5185','#f4fa9c','#17b978', 
    '#1e2a78','#ffb174','#40514e','#f5b5fc']

    // for (let i = 1; i <= number_of_cards / 2; i++) {
    // 	let c=`rgba(${random(100,255)},${random(100,255)},${random(100,255)},255)`
    //     colorByIndex.push(c)
    //     colorByIndex.push(c)
    // } 
    //random no good...

    /*	END OF DECLARATIVE ZONE */
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
    for (let i=1;i<=number_of_cards;i++) {
        cards[i-1].style.backgroundColor = colorByIndex[cards[i-1].children[0].innerHTML];
    }
    setTimeout(()=>{
    	for(let card of cards){
    		card.className+='unsolved'
    	}
    }, 1000);
}