let angle = 0; // Кут обертання
let moveOffset = 0; // Зсув для переміщення
let scaleFactor = 1; // Масштаб
let scalingUp = true; // Напрямок масштабування

const SCALE = 35;
const ORIGIN_X = 250;
const ORIGIN_Y = 200;

function draw() {
    canvas = document.getElementById("myCanvas");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");

        canvas.addEventListener('mousedown', function() {
            if (!isAnimating) {
                isAnimating = true;
                animate();
            } else {
                isAnimating = false;
                cancelAnimationFrame(animationId);
            }
        });

        drawScene();
    }
}

function drawScene() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(ORIGIN_X, canvas.height - ORIGIN_Y);
    ctx.scale(1, -1);

    drawAxes();

    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.fillRect(-3 * SCALE, -1.5 * SCALE, 2 * SCALE, 1.5 * SCALE);
    ctx.strokeRect(-3 * SCALE, -1.5 * SCALE, 2 * SCALE, 1.5 * SCALE);

    let rLeft = 1 * (isAnimating ? scaleFactor : 1);
    ctx.beginPath();
    ctx.arc(-2 * SCALE, 1.25 * SCALE, rLeft * SCALE, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.arc(1 * SCALE, 1 * SCALE, 1 * SCALE, 0, Math.PI * 2);

    if (isAnimating) {
        let time = new Date().getTime() * 0.002;
        let r = Math.floor(Math.sin(time) * 127 + 128);
        let g = Math.floor(Math.sin(time + 2) * 127 + 128);
        let b = Math.floor(Math.sin(time + 4) * 127 + 128);
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    } else {
        ctx.fillStyle = "blue";
    }
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "blue";

    ctx.fillRect(0 * SCALE, -1.5 * SCALE, 1.5 * SCALE, 1.5 * SCALE);
    ctx.strokeRect(0 * SCALE, -1.5 * SCALE, 1.5 * SCALE, 1.5 * SCALE);

    ctx.save();
    if (isAnimating) {
        let skew = Math.sin(moveOffset) * 0.5;
        ctx.transform(1, 0, skew, 1, 0, 0);
    }
    ctx.fillRect(0.5 * SCALE, -3 * SCALE, 3 * SCALE, 1 * SCALE);
    ctx.strokeRect(0.5 * SCALE, -3 * SCALE, 3 * SCALE, 1 * SCALE);
    ctx.restore();


    ctx.save();
    if (isAnimating) {
        let tx = Math.sin(moveOffset) * 0.5 * SCALE;
        ctx.translate(tx, 0);
    }
    ctx.fillRect(2 * SCALE, 1 * SCALE, 1.5 * SCALE, 1.5 * SCALE);
    ctx.strokeRect(2 * SCALE, 1 * SCALE, 1.5 * SCALE, 1.5 * SCALE);
    ctx.restore();

    ctx.save();
    ctx.translate(2.75 * SCALE, -0.75 * SCALE);
    let rotation = (45 * Math.PI / 180) + (isAnimating ? angle : 0);
    ctx.rotate(rotation);
    let rhombSize = 1.1 * SCALE;
    ctx.fillRect(-rhombSize / 2, -rhombSize / 2, rhombSize, rhombSize);
    ctx.strokeRect(-rhombSize / 2, -rhombSize / 2, rhombSize, rhombSize);
    ctx.restore();

    ctx.fillRect(3.6 * SCALE, 0.5 * SCALE, 1 * SCALE, 1 * SCALE);
    ctx.strokeRect(3.6 * SCALE, 0.5 * SCALE, 1 * SCALE, 1 * SCALE);

    ctx.fillRect(4 * SCALE, -1.5 * SCALE, 1 * SCALE, 1 * SCALE);
    ctx.strokeRect(4 * SCALE, -1.5 * SCALE, 1 * SCALE, 1 * SCALE);
}

function drawAxes() {
    ctx.save();
    ctx.lineWidth = 1 / SCALE * 2;
    ctx.strokeStyle = "black";

    ctx.beginPath();
    ctx.moveTo(-ORIGIN_X, 0);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -canvas.height);
    ctx.lineTo(0, ORIGIN_Y);
    ctx.stroke();
    ctx.restore();
}

function animate() {
    angle += 0.02;
    moveOffset += 0.05;

    if (scalingUp) {
        scaleFactor += 0.005;
        if (scaleFactor >= 1.15) scalingUp = false;
    } else {
        scaleFactor -= 0.005;
        if (scaleFactor <= 0.85) scalingUp = true;
    }

    drawScene();

    if (isAnimating) {
        animationId = requestAnimationFrame(animate);
    }
}

function resetAnimation() {
    isAnimating = false;
    cancelAnimationFrame(animationId);
    angle = 0;
    moveOffset = 0;
    scaleFactor = 1;
    drawScene();
}