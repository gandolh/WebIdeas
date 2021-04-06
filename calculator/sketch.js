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
                history.lastElementChild.children[1].innerHTML = '= ' + final_result;
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
        history.lastElementChild.children[1].innerHTML = '=' + final_result;
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