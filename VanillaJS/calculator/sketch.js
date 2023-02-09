/* inspiration desmos calculator*/
let history = document.getElementsByClassName('calculusHistory')[0];
let inputBody = document.getElementsByClassName('inputBody')[0];
let final_result;




inputBody.children[0].select();
// history.children[0].style.backgroundColor='red';
addToHistory(inputBody.children[0])
evaluateOnModify(inputBody.children[0])

function addToHistory(node) {
    node.addEventListener("keyup", ({
        key
    }) => {
        if (key === "Enter") {
            //post it to history
            evaluateInput();
            if (final_result != undefined) {
                if (final_result > 9999999)
                    history.lastElementChild.children[1].innerHTML = '=' + expo(final_result, 2);
                else if (final_result < 1 / 999999) history.lastElementChild.children[1].innerHTML = '=' + expo(final_result, 2);
                else history.lastElementChild.children[1].innerHTML = '=' + math.round(final_result, 7);
                history.lastElementChild.children[0].readOnly = true;
                newInputBody = createNewInputBody();
                history.appendChild(newInputBody)
                last_input = history.lastElementChild.children[0];
                last_input.focus();
                evaluateOnModify(newInputBody)
                addToHistory(last_input);
            }

        }
    })
}

function evaluateOnModify(node) {
    node.addEventListener('input', (event) => {
        evaluateInput();
    })
}

function createNewInputBody() {
    let newInputBody = document.createElement('div');
    let newInput = document.createElement('input');
    let newResult = document.createElement('div');
    newInputBody.className = 'inputBody';
    newResult.className = 'result';
    newInputBody.appendChild(newInput)
    newInputBody.appendChild(newResult);
    return newInputBody;
}

function validInput(equation) {
    try {
        math.evaluate(equation);
    } catch (error) {
        return 0;
    }
    return 1;
}

function evaluateInput() {
    let equation = history.lastElementChild.children[0].value;
    if (validInput(equation)) {
        final_result = math.evaluate(equation);
        if (final_result != undefined) {
            if (final_result > 9999999)
                history.lastElementChild.children[1].innerHTML = '=' + expo(final_result, 2);
            else if (final_result < 1 / 999999) history.lastElementChild.children[1].innerHTML = '=' + expo(final_result, 2);
            else history.lastElementChild.children[1].innerHTML = '=' + math.round(final_result, 7);    
        } else {
            history.lastElementChild.children[1].innerHTML = '';
        }
    } else {
        final_result = undefined;
        if (history.lastElementChild.children[1].children[0] == undefined) {
            history.lastElementChild.children[1].innerHTML = '';
            let warning_icon = document.createElement('i');
            warning_icon.className = 'fas fa-exclamation-triangle';
            history.lastElementChild.children[1].appendChild(warning_icon);
        }
    }
}

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f); //proudly got from Mozilla MDN
    //love ya mozilla guys <3 
}