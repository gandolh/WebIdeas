/* inspiration desmos calculator*/

let history = document.getElementsByClassName('calculusHistory')[0];

// history.children[0].style.backgroundColor='red';
addToHistory(history.children[0])

function addToHistory(node) {
    node.addEventListener("keyup", ({
        key
    }) => {
        if (key === "Enter") {
            history.insertBefore(document.createElement('input'), node)
            history.children[0].select();
            addToHistory(history.children[0])
        }
    })
}