var bloco;

function iniciar() {
    gameArea.start();
    bloco = new objeto(30, 30, "#f179d7", 10, 120);
}

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(mover, 20);
        window.addEventListener('keydown', function(e) {
            gameArea.keys = (gameArea.keys || []);
            gameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function(e) {
            gameArea.keys[e.keyCode] = (e.type == "keydown");
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}


function objeto(width, height, cor, x, y) {
    this.gamearea = gameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = gameArea.context;
        ctx.fillStyle = cor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.novaPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function mover() {
    gameArea.clear();
    bloco.speedX = 0;
    bloco.speedY = 0;
    // Cima
    if(gameArea.keys && gameArea.keys[38]) {
        bloco.speedY = -1;
    }
    // Baixo
    if(gameArea.keys && gameArea.keys[40]) {
        bloco.speedY = 1;
    }
    // Esquerda
    if(gameArea.keys && gameArea.keys[37]) {
        bloco.speedX = -1;
    }
    // Direita
    if(gameArea.keys && gameArea.keys[39]) {
        bloco.speedX = 1;
    }

    bloco.novaPos();
    bloco.update();
}