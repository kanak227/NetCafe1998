import React, { useState } from 'react';
import SnakeGame from './games/SnakeGame';
import Solitaire from './games/Solitaire';
import Minesweeper from './games/Minesweeper';

const Games: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  if (selectedGame) {
    switch (selectedGame) {
      case 'snake':
        return <SnakeGame onBack={() => setSelectedGame(null)} />;
      case 'solitaire':
        return <Solitaire onBack={() => setSelectedGame(null)} />;
      case 'minesweeper':
        return <Minesweeper onBack={() => setSelectedGame(null)} />;
      default:
        return null;
    }
  }

  return (
    <div className="h-full bg-gray-300 p-4" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      <h2 className="text-lg font-bold mb-4 text-center">Games</h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div 
          className="bg-white border-2 border-gray-400 border-t-white border-l-white p-4 cursor-pointer hover:bg-gray-100 text-center"
          onClick={() => setSelectedGame('snake')}
        >
          <div className="w-12 h-12 mx-auto mb-2 bg-green-500 border border-gray-600 flex items-center justify-center">
            <div className="w-8 h-2 bg-green-700 rounded"></div>
          </div>
          <div className="text-sm font-bold">Snake</div>
          <div className="text-xs text-gray-600">Classic snake game</div>
        </div>

        <div 
          className="bg-white border-2 border-gray-400 border-t-white border-l-white p-4 cursor-pointer hover:bg-gray-100 text-center"
          onClick={() => setSelectedGame('solitaire')}
        >
          <div className="w-12 h-12 mx-auto mb-2 bg-red-600 border border-gray-600 flex items-center justify-center">
            <div className="text-white font-bold text-lg">♠</div>
          </div>
          <div className="text-sm font-bold">Solitaire</div>
          <div className="text-xs text-gray-600">Card game</div>
        </div>

        <div 
          className="bg-white border-2 border-gray-400 border-t-white border-l-white p-4 cursor-pointer hover:bg-gray-100 text-center"
          onClick={() => setSelectedGame('minesweeper')}
        >
          <div className="w-12 h-12 mx-auto mb-2 bg-gray-400 border border-gray-600 flex items-center justify-center">
            <div className="text-black font-bold text-lg">💣</div>
          </div>
          <div className="text-sm font-bold">Minesweeper</div>
          <div className="text-xs text-gray-600">Find the mines</div>
        </div>

        <div className="bg-white border-2 border-gray-400 border-t-white border-l-white p-4 cursor-pointer hover:bg-gray-100 text-center opacity-50">
          <div className="w-12 h-12 mx-auto mb-2 bg-blue-500 border border-gray-600 flex items-center justify-center">
            <div className="text-white font-bold text-lg">?</div>
          </div>
          <div className="text-sm font-bold">More Games</div>
          <div className="text-xs text-gray-600">Coming soon</div>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-600">
        Select a game to play
      </div>
    </div>
  );
};

export default Games;