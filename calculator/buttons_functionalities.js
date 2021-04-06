let num_buttons = document.getElementsByClassName('numbers')[0].children;
let modifyInputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});
let pressedEnterKey = new KeyboardEvent('keyup', {
    'key': 'Enter'
})

for (let but of num_buttons) {
    but.addEventListener('click', () => {
        let NoOfInputBody = document.getElementsByClassName('inputBody').length;
        let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
        let content = but.innerHTML;
        if (content.match(/[0-9]/g) || content.match(/[\.\-\+]/g)) input.value += but.innerHTML;
        switch (content) {
            case '×':
                input.value += '*';
                break;
            case '÷':
                input.value += '/'
                break;
            case 'ans':
                input.value += document.getElementsByClassName('inputBody')[NoOfInputBody - 2].children[1].innerHTML.slice(1);
                break;
        }
        input.dispatchEvent(modifyInputEvent);
        input.focus();
    })
}

let others = document.getElementsByClassName('others')[0].children;
for (let but of others) {
    if (but.className != 'duo') {
        but.addEventListener('click', () => {
            let NoOfInputBody = document.getElementsByClassName('inputBody').length;
            let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
            let content = but.innerHTML;
            switch (content) {
                case '⏎':
                    input.dispatchEvent(pressedEnterKey);
                    break;
                case 'BACKSPACE':
                    input.value = input.value.slice(0, -1)
                    break;
            }
            input.dispatchEvent(modifyInputEvent);
            input.focus();
        })
    }
}
let arrows = document.getElementsByClassName('duo')[0].children;
arrows[0].addEventListener('click', () => {
    //left arrow
    let NoOfInputBody = document.getElementsByClassName('inputBody').length;
    let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
    console.log(1)
    input.setSelectionRange(1,2)
})