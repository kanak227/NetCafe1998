import React, { useState } from 'react';

interface SolitaireProps {
  onBack: () => void;
}

const Solitaire: React.FC<SolitaireProps> = ({ onBack }) => {
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  const suits = ['♠', '♥', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  const Card: React.FC<{ suit: string; value: string; faceDown?: boolean }> = ({ suit, value, faceDown = false }) => (
    <div className={`w-12 h-16 border border-gray-600 rounded-sm flex items-center justify-center text-xs cursor-pointer hover:bg-gray-100 ${
      faceDown ? 'bg-blue-800' : 'bg-white'
    }`}>
      {!faceDown && (
        <div className={`text-center ${suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-black'}`}>
          <div className="font-bold">{value}</div>
          <div>{suit}</div>
        </div>
      )}
      {faceDown && (
        <div className="w-full h-full bg-blue-800 border border-blue-900 rounded-sm flex items-center justify-center">
          <div className="text-white text-xs">🂠</div>
        </div>
      )}
    </div>
  );

  return (
    <div className="h-full bg-green-700 p-4 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="px-3 py-1 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-xs"
        >
          ← Back
        </button>
        <h2 className="text-lg font-bold text-white">Solitaire</h2>
        <div className="text-sm text-white">Score: {score}</div>
      </div>

      <div className="flex-1">
        {/* Top Row - Foundation and Stock */}
        <div className="flex justify-between mb-6">
          <div className="flex gap-2">
            {/* Stock pile */}
            <div className="flex gap-1">
              <Card suit="♠" value="K" faceDown />
              <div className="w-12 h-16 border-2 border-dashed border-gray-400 rounded-sm"></div>
            </div>
          </div>
          
          <div className="flex gap-2">
            {/* Foundation piles */}
            {suits.map((suit, index) => (
              <div key={index} className="w-12 h-16 border-2 border-dashed border-gray-400 rounded-sm bg-green-600 flex items-center justify-center">
                <span className={`text-2xl ${suit === '♥' || suit === '♦' ? 'text-red-300' : 'text-gray-300'}`}>
                  {suit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tableau */}
        <div className="flex gap-2 justify-center">
          {[...Array(7)].map((_, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-1">
              {[...Array(colIndex + 1)].map((_, cardIndex) => (
                <div key={cardIndex} style={{ marginTop: cardIndex > 0 ? '-40px' : '0' }}>
                  {cardIndex === colIndex ? (
                    <Card 
                      suit={suits[cardIndex % 4]} 
                      value={values[cardIndex % 13]} 
                    />
                  ) : (
                    <Card suit="♠" value="K" faceDown />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-white text-xs mb-2">Moves: {moves}</div>
        <div className="flex gap-2 justify-center">
          <button className="px-3 py-1 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-xs">
            New Game
          </button>
          <button className="px-3 py-1 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-xs">
            Hint
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solitaire;