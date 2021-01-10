// Variables
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clear = document.getElementById('clear');

const context = canvas.getContext('2d');

let size = 10,
    color = 'black',
    isPressed = false,
    x,
    y;

// Function: Draw Circle
const drawCircle = (x, y) => {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
};

// Function: Draw line
const drawLine = (x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
};

// Function: Update brush size
const updateBrushSize = () => {
    sizeEl.innerText = size;
};

// Event Listener: Mousedown
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

// Event Listener: Mouseup
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

// Event Listener: Mousemove
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

// Event Listener: Color
colorEl.addEventListener('change', (e) => (color = e.target.value));

// Event Listener: Size Increment
increaseBtn.addEventListener('click', () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateBrushSize();
});

// Event Listener: Size Decrementy
decreaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateBrushSize();
});

// Event Listener: Clear btn click
clear.addEventListener('click', () =>
    context.clearRect(0, 0, canvas.width, canvas.height)
);
