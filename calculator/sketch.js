/* inspiration desmos calculator*/
let history = document.getElementsByClassName('calculusHistory')[0];
let inputBody = document.getElementsByClassName('inputBody')[0];
inputBody.children[0].select();
// history.children[0].style.backgroundColor='red';
addToHistory(inputBody.children[0])

function addToHistory(node) {
    node.addEventListener("keyup", ({
        key
    }) => {
        if (key === "Enter") {
            let equation = history.lastElementChild.children[0].value;
            history.lastElementChild.children[1].innerHTML = '= ' + math.evaluate(equation);
            newInputBody = createNewInputBody();
            history.appendChild(newInputBody)
            last_input = history.lastElementChild.children[0];
            last_input.select();
            addToHistory(last_input);
        }
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