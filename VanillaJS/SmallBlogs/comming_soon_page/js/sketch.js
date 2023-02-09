function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    vehicle = new Vehicle(100,100);
}

function draw() {
    clear();
    vehicle.update();
    vehicle.seek(createVector(mouseX, mouseY));
    vehicle.display();
}




//window resize