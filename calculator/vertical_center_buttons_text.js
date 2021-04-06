let divs = document.getElementsByClassName('calculusButtons')[0].children;


vertically_align_divs(divs)

function vertically_align_divs(obj) {
    if (HTMLCollection.prototype.isPrototypeOf(obj)) {
        for (let div of obj)
            if (div.children.length != 0) vertically_align_divs(div.children)
            else vertically_align_divs(div)
    } else {
        if (obj.tagName == 'DIV')
            obj.style.lineHeight = obj.offsetHeight + 'px'
    }
}

