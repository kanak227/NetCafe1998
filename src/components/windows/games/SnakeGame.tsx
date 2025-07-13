import React, { useState, useEffect, useCallback } from 'react';

interface SnakeGameProps {
  onBack: () => void;
}

interface Position {
  x: number;
  y: number;
}

const SnakeGame: React.FC<SnakeGameProps> = ({ onBack }) => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gridSize = 20;
  const canvasSize = 300;

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    generateFood();
  };

  const startGame = () => {
    setGameStarted(true);
  };

  const moveSnake = useCallback(() => {
    if (!gameStarted || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        generateFood();
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameStarted, gameOver, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameStarted]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  const cellSize = canvasSize / gridSize;

  return (
    <div className="h-full bg-gray-300 p-4 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="px-3 py-1 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-xs"
        >
          ← Back
        </button>
        <h2 className="text-lg font-bold">Snake Game</h2>
        <div className="text-sm">Score: {score}</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div 
          className="border-2 border-gray-600 border-t-gray-800 border-l-gray-800 bg-black relative"
          style={{ width: canvasSize, height: canvasSize }}
        >
          {/* Snake */}
          {snake.map((segment, index) => (
            <div
              key={index}
              className={`absolute ${index === 0 ? 'bg-green-400' : 'bg-green-600'}`}
              style={{
                left: segment.x * cellSize,
                top: segment.y * cellSize,
                width: cellSize - 1,
                height: cellSize - 1,
              }}
            />
          ))}
          
          {/* Food */}
          <div
            className="absolute bg-red-500 rounded-full"
            style={{
              left: food.x * cellSize + 2,
              top: food.y * cellSize + 2,
              width: cellSize - 4,
              height: cellSize - 4,
            }}
          />

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xl font-bold mb-2">Game Over!</div>
                <div className="mb-4">Final Score: {score}</div>
                <button 
                  onClick={resetGame}
                  className="px-4 py-2 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-black text-sm"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}

          {/* Start Game Overlay */}
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-xl font-bold mb-2">Snake Game</div>
                <div className="mb-4 text-sm">Use arrow keys to control the snake</div>
                <button 
                  onClick={startGame}
                  className="px-4 py-2 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-black text-sm"
                >
                  Start Game
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-xs text-center text-gray-600">
          Use arrow keys to move • Eat red food to grow • Don't hit walls or yourself!
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;