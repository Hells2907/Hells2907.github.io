let drawingCanvas;
let isDrawing = false;

function setup() {
    drawingCanvas = createCanvas(800, 600);
    drawingCanvas.mousePressed(startDrawing);
    drawingCanvas.mouseReleased(stopDrawing);
    background(255);
}

function draw() {
    if (isDrawing) {
        let brushSize = 12; 
        let drawingColor = color(0); 

        stroke(drawingColor);
        strokeWeight(brushSize);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
}


