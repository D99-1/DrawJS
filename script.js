const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

const canvasSize = 500;
const pixelSize = 10;
canvas.width = canvasSize;
canvas.height = canvasSize;

for(let x = 0; x < canvasSize; x++) {
    for(let y = 0; y < canvasSize; y++) {
        ctx.fillStyle = '#FFF';
        ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        ctx.strokeStyle = '#CCCCCC';
        ctx.strokeRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }

}

let brushColor = '#000000';

let isDrawing = false;

document.getElementById('penButton').addEventListener('click', () => {
    brushColor = '#000000';
});

document.getElementById('eraserButton').addEventListener('click', () => {
    brushColor = '#FFFFFF';
});

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    drawPixel(e);
});

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        drawPixel(e);
    }
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function drawPixel(e) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize) * pixelSize;
    const y = Math.floor((e.clientY - rect.top) / pixelSize) * pixelSize;

    ctx.fillStyle = brushColor;
    ctx.fillRect(x, y, pixelSize, pixelSize);
    ctx.strokeStyle = '#CCCCCC';
    ctx.strokeRect(x, y, pixelSize, pixelSize);
}
