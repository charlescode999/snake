document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('snakeCanvas');
    const context = canvas.getContext('2d');
    const startButton = document.getElementById('startButton');
    const restartButton = document.getElementById('restartButton');
    const gameOverModal = document.getElementById('gameOverModal');
    const closeBtn = document.querySelector('.close');
    const gameOverText = document.getElementById('gameOverText');
    const scoreValue = document.getElementById('scoreValue');
    const scoreDisplay = document.getElementById('score');
  
    let snake = [{ x: 200, y: 200 }];
    let food = { x: 0, y: 0 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    const snakeSize = 20;
    const foodSize = 20;
    const groundWidth = canvas.width = window.innerWidth;
    const groundHeight = canvas.height = window.innerHeight;
    const winningScore = 400;
  
    function drawSnake() {
      snake.forEach(segment => {
        context.fillStyle = 'green';
        context.fillRect(segment.x, segment.y, snakeSize, snakeSize);
      });
    }
  
    function drawFood() {
      context.fillStyle = 'red';
      context.fillRect(food.x, food.y, foodSize, foodSize);
    }
  
    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
  
      if (head.x === food.x && head.y === food.y) {
        score += 5;
        scoreValue.textContent = score;
  
        for (let i = 0; i < 5; i++) {
          snake.push({ x: 0, y: 0 });
        }
        generateFood();
      } else {
        snake.pop();
      }
    }
  
    function generateFood() {
      const maxX = Math.floor(groundWidth / foodSize) - 1;
      const maxY = Math.floor(groundHeight / foodSize) - 1;
      food.x = Math.floor(Math.random() * maxX) * foodSize;
      food.y = Math.floor(Math.random() * maxY) * foodSize;
    }
  
    function checkCollision() {
      const head = snake[0];
      if (head.x < 0 || head.x >= groundWidth || head.y < 0 || head.y >= groundHeight) {
        clearInterval(game);
        gameOverText.textContent = score >= winningScore ? 'You won!' : 'Game Over';
        gameOverModal.style.display = 'block';
      }
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, groundWidth, groundHeight);
    }
  
    function updateGame() {
      clearCanvas();
      moveSnake();
      drawSnake();
      drawFood();
      checkCollision();
    }
  
    function startGame() {
      score = 0;
      snake = [{ x: 200, y: 200 }];
      dx = 0;
      dy = 0;
      generateFood();
      game = setInterval(updateGame, 100);
      gameOverModal.style.display = 'none';
      scoreValue.textContent = score;
    }
  
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    closeBtn.addEventListener('click', () => {
      gameOverModal.style.display = 'none';
    });
  
    document.addEventListener('keydown', event => {
      const keyPressed = event.key.toLowerCase();
      switch (keyPressed) {
        case 'w':
        case 'arrowup':
          if (dy !== snakeSize) {
            dx = 0;
            dy = -snakeSize;
          }
          break;
        case 'a':
       
        case 'a':
        case 'arrowleft':
          if (dx !== snakeSize) {
            dx = -snakeSize;
            dy = 0;
          }
          break;
        case 'd':
        case 'arrowright':
          if (dx !== -snakeSize) {
            dx = snakeSize;
            dy = 0;
          }
          break;
        case 's':
        case 'arrowdown':
          if (dy !== -snakeSize) {
            dx = 0;
            dy = snakeSize;
          }
          break;
      }
    });
  
    function checkFoodCollision() {
      const head = snake[0];
      if (head.x === food.x && head.y === food.y) {
        score += 5;
        scoreValue.textContent = score;
        generateFood();
        snake.push({ ...snake[snake.length - 1] }); // Increase snake length
      }
    }
  
    function updateSnakePosition() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);
      snake.pop();
    }
  
    function updateGame() {
      clearCanvas();
      updateSnakePosition();
      drawSnake();
      drawFood();
      checkCollision();
      checkFoodCollision();
      if (score >= winningScore) {
        clearInterval(game);
        gameOverText.textContent = 'You won!';
        gameOverModal.style.display = 'block';
      }
    }
  
    function startGame() {
      score = 0;
      snake = [{ x: 200, y: 200 }];
      dx = 0;
      dy = 0;
      generateFood();
      game = setInterval(updateGame, 100);
      gameOverModal.style.display = 'none';
      scoreValue.textContent = score;
    }
  
    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', startGame);
    closeBtn.addEventListener('click', () => {
      gameOverModal.style.display = 'none';
    });
  });
  
  
  //i want to spead up my staff
  
  let gameSpeed = 100; // This is the current speed in milliseconds
  
  function startGame() {
    // Your existing game initialization code...
  
    // Adjust this interval to change the speed of the game
    game = setInterval(updateGame, gameSpeed);
  }
  
  
  // Your existing code...
  
  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
  
    if (head.x === food.x && head.y === food.y) {
      score += 5;
      scoreValue.textContent = score;
  
      for (let i = 0; i < 5; i++) {
        snake.push({ x: 0, y: 0 });
      }
      generateFood();
    } else {
      snake.pop();
    }
  }