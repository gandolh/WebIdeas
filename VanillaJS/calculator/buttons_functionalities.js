let num_buttons = document.getElementsByClassName('numbers')[0].children;

let modifyInputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});

let pressedEnterKey = new KeyboardEvent('keyup', {
    'key': 'Enter'
})

function insertCharAtIndex(str, index, char) {
    return str.slice(0, index) + char + str.slice(index, str.length)
}

for (let but of num_buttons) {
    but.addEventListener('click', () => {
        let NoOfInputBody = document.getElementsByClassName('inputBody').length;
        let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
        let content = but.innerHTML;
        if (content.match(/[0-9]/g) || content.match(/[\.\-\+]/g)) input.value = insertCharAtIndex(input.value, input.selectionStart, content)
        switch (content) {
            case '×':
                input.value = insertCharAtIndex(input.value, input.selectionStart, '*')
                break;
            case '÷':
                input.value = insertCharAtIndex(input.value, input.selectionStart, '/')
                break;
            case 'ans':
                input.value = insertCharAtIndex(input.value, input.selectionStart,
                    document.getElementsByClassName('inputBody')[NoOfInputBody - 2].children[1].innerHTML.slice(1))
                break;
        }
        input.dispatchEvent(modifyInputEvent);
        input.focus();
        input.setSelectionRange(input.selectionStart, input.selectionStart);
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
            input.setSelectionRange(input.selectionStart, input.selectionStart);
        })
    }
}

let arrows = document.getElementsByClassName('duo')[0].children;
arrows[0].addEventListener('click', () => {
    //left arrow
    let NoOfInputBody = document.getElementsByClassName('inputBody').length;
    let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
    input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
})
arrows[1].addEventListener('click', () => {
    //left arrow
    let NoOfInputBody = document.getElementsByClassName('inputBody').length;
    let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
    input.setSelectionRange(input.selectionStart + 1, input.selectionStart + 1);
})



let main_func = document.getElementsByClassName('main_functions')[0].children;

for (let but of main_func) {
    but.addEventListener('click', () => {
        let NoOfInputBody = document.getElementsByClassName('inputBody').length;
        let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
        let content = but.innerHTML;
        console.log(content)
        switch (content) {
            case 'a²':

                input.value = insertCharAtIndex(input.value, input.selectionStart, '^2')
                break;
            case 'aⁿ':
                input.value = insertCharAtIndex(input.value, input.selectionStart, '^');
                break;
            case '|a|':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'abs()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
            case '√':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'sqrt()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
            case '∛':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'cbrt()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
            case 'π':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'pi');
                break;
            case 'sin':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'sin()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
            case 'cos':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'cos()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
            case 'tan':
                input.value = insertCharAtIndex(input.value, input.selectionStart, 'tan()');
                input.setSelectionRange(input.selectionStart - 1, input.selectionStart - 1);
                break;
        }
        input.dispatchEvent(modifyInputEvent);
        input.focus();
        input.setSelectionRange(input.selectionStart, input.selectionStart);
    })
}

document.getElementById('option1').addEventListener('click', () => {
    document.getElementsByClassName('main_option')[0].style.display = 'grid';
    document.getElementsByClassName('abc')[0].style.display = 'none';
    document.getElementsByClassName('functions')[0].style.display = 'none';
})
document.getElementById('option2').addEventListener('click', () => {
    document.getElementsByClassName('main_option')[0].style.display = 'none';
    document.getElementsByClassName('abc')[0].style.display = 'flex';
    document.getElementsByClassName('functions')[0].style.display = 'none';
})
document.getElementById('option3').addEventListener('click', () => {
    document.getElementsByClassName('main_option')[0].style.display = 'none';
    document.getElementsByClassName('abc')[0].style.display = 'none';
    document.getElementsByClassName('functions')[0].style.display = 'flex';
})


let letters = 'qwertyuiopasdfghjklzxcvbnm()[]!';
let abc_menu = document.getElementsByClassName('abc')[0];
for (let i = 0; i < letters.length; i++) {
    let l = letters[i];
    let n_div = document.createElement('div')
    n_div.innerHTML = l;
    n_div.addEventListener('click', () => {
        let NoOfInputBody = document.getElementsByClassName('inputBody').length;
        let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
        input.value = insertCharAtIndex(input.value, input.selectionStart, l)
    })
    abc_menu.appendChild(n_div)
}

let enter = document.createElement('div')
let backspace = document.createElement('div')
enter.innerHTML = '&#9166;'
backspace.innerHTML = 'BACKSPACE'
abc_menu.appendChild(enter)
abc_menu.appendChild(backspace)

backspace.addEventListener('click', () => {
    let NoOfInputBody = document.getElementsByClassName('inputBody').length;
    let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
    input.value = input.value.slice(0, -1)
    input.dispatchEvent(modifyInputEvent);
    input.focus();
    input.setSelectionRange(input.selectionStart, input.selectionStart);
})

enter.addEventListener('click', () => {
    let NoOfInputBody = document.getElementsByClassName('inputBody').length;
    let input = document.getElementsByClassName('inputBody')[NoOfInputBody - 1].children[0];
input.dispatchEvent(pressedEnterKey);
    input.dispatchEvent(modifyInputEvent);
    input.focus();
    input.setSelectionRange(input.selectionStart, input.selectionStart);
})