let scrollDown= document.getElementsByClassName("scrollDown")[0];
scrollDown.addEventListener('click',()=>{
	window.scrollTo(0,window.innerHeight)
	console.log(window.innerHeight)
})
