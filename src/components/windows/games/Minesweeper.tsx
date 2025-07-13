import React, { useState, useEffect } from 'react';

interface MinesweeperProps {
  onBack: () => void;
}

interface Cell {
  isMine: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
  neighborCount: number;
}

const Minesweeper: React.FC<MinesweeperProps> = ({ onBack }) => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [mineCount, setMineCount] = useState(10);
  const [flagCount, setFlagCount] = useState(0);
  const gridSize = 9;
  const totalMines = 10;

  const initializeGrid = () => {
    const newGrid: Cell[][] = Array(gridSize).fill(null).map(() =>
      Array(gridSize).fill(null).map(() => ({
        isMine: false,
        isRevealed: false,
        isFlagged: false,
        neighborCount: 0,
      }))
    );

    // Place mines randomly
    let minesPlaced = 0;
    while (minesPlaced < totalMines) {
      const row = Math.floor(Math.random() * gridSize);
      const col = Math.floor(Math.random() * gridSize);
      if (!newGrid[row][col].isMine) {
        newGrid[row][col].isMine = true;
        minesPlaced++;
      }
    }

    // Calculate neighbor counts
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (!newGrid[row][col].isMine) {
          let count = 0;
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = row + i;
              const newCol = col + j;
              if (
                newRow >= 0 && newRow < gridSize &&
                newCol >= 0 && newCol < gridSize &&
                newGrid[newRow][newCol].isMine
              ) {
                count++;
              }
            }
          }
          newGrid[row][col].neighborCount = count;
        }
      }
    }

    setGrid(newGrid);
    setGameStatus('playing');
    setFlagCount(0);
  };

  useEffect(() => {
    initializeGrid();
  }, []);

  const revealCell = (row: number, col: number) => {
    if (gameStatus !== 'playing' || grid[row][col].isRevealed || grid[row][col].isFlagged) {
      return;
    }

    const newGrid = [...grid];
    
    if (newGrid[row][col].isMine) {
      // Game over
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          if (newGrid[i][j].isMine) {
            newGrid[i][j].isRevealed = true;
          }
        }
      }
      setGameStatus('lost');
    } else {
      // Reveal cell and potentially neighbors
      const toReveal: [number, number][] = [[row, col]];
      
      while (toReveal.length > 0) {
        const [currentRow, currentCol] = toReveal.pop()!;
        
        if (newGrid[currentRow][currentCol].isRevealed) continue;
        
        newGrid[currentRow][currentCol].isRevealed = true;
        
        if (newGrid[currentRow][currentCol].neighborCount === 0) {
          for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
              const newRow = currentRow + i;
              const newCol = currentCol + j;
              if (
                newRow >= 0 && newRow < gridSize &&
                newCol >= 0 && newCol < gridSize &&
                !newGrid[newRow][newCol].isRevealed &&
                !newGrid[newRow][newCol].isFlagged
              ) {
                toReveal.push([newRow, newCol]);
              }
            }
          }
        }
      }
    }

    setGrid(newGrid);
  };

  const toggleFlag = (row: number, col: number, e: React.MouseEvent) => {
    e.preventDefault();
    if (gameStatus !== 'playing' || grid[row][col].isRevealed) {
      return;
    }

    const newGrid = [...grid];
    newGrid[row][col].isFlagged = !newGrid[row][col].isFlagged;
    setGrid(newGrid);
    setFlagCount(prev => newGrid[row][col].isFlagged ? prev + 1 : prev - 1);
  };

  const getCellContent = (cell: Cell) => {
    if (cell.isFlagged) return '🚩';
    if (!cell.isRevealed) return '';
    if (cell.isMine) return '💣';
    if (cell.neighborCount === 0) return '';
    return cell.neighborCount.toString();
  };

  const getCellColor = (cell: Cell) => {
    if (!cell.isRevealed) return 'text-black';
    if (cell.isMine) return 'text-red-600';
    
    const colors = [
      'text-blue-600',   // 1
      'text-green-600',  // 2
      'text-red-600',    // 3
      'text-purple-600', // 4
      'text-yellow-600', // 5
      'text-pink-600',   // 6
      'text-black',      // 7
      'text-gray-600',   // 8
    ];
    
    return colors[cell.neighborCount - 1] || 'text-black';
  };

  return (
    <div className="h-full bg-gray-300 p-4 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="px-3 py-1 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-xs"
        >
          ← Back
        </button>
        <h2 className="text-lg font-bold">Minesweeper</h2>
        <div className="text-sm">Mines: {totalMines - flagCount}</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center gap-4">
          <div className="px-3 py-1 border-2 border-gray-600 border-t-gray-800 border-l-gray-800 bg-black text-red-500 font-mono text-lg">
            {String(totalMines - flagCount).padStart(3, '0')}
          </div>
          
          <button 
            onClick={initializeGrid}
            className="w-8 h-8 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-lg"
          >
            {gameStatus === 'lost' ? '😵' : gameStatus === 'won' ? '😎' : '🙂'}
          </button>
          
          <div className="px-3 py-1 border-2 border-gray-600 border-t-gray-800 border-l-gray-800 bg-black text-red-500 font-mono text-lg">
            000
          </div>
        </div>

        <div className="border-2 border-gray-600 border-t-gray-800 border-l-gray-800 bg-gray-400 p-2">
          <div className="grid grid-cols-9 gap-0">
            {grid.map((row, rowIndex) =>
              row.map((cell, colIndex) => (
                <button
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-6 h-6 border text-xs font-bold flex items-center justify-center ${
                    cell.isRevealed
                      ? 'border-gray-400 bg-gray-200'
                      : 'border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200'
                  } ${getCellColor(cell)}`}
                  onClick={() => revealCell(rowIndex, colIndex)}
                  onContextMenu={(e) => toggleFlag(rowIndex, colIndex, e)}
                >
                  {getCellContent(cell)}
                </button>
              ))
            )}
          </div>
        </div>

        {gameStatus !== 'playing' && (
          <div className="mt-4 text-center">
            <div className="text-lg font-bold mb-2">
              {gameStatus === 'won' ? 'You Won!' : 'Game Over!'}
            </div>
            <button 
              onClick={initializeGrid}
              className="px-4 py-2 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-sm"
            >
              New Game
            </button>
          </div>
        )}

        <div className="mt-4 text-xs text-center text-gray-600">
          Left click to reveal • Right click to flag
        </div>
      </div>
    </div>
  );
};

export default Minesweeper;