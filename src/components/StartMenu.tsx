import React from 'react';
import { useWindows } from '../contexts/WindowContext';
import Notepad from './windows/Notepad';
import Calculator from './windows/Calculator';
import InternetExplorer from './windows/InternetExplorer';
import Games from './windows/Games';
import YahooMessenger from './windows/YahooMessenger';

interface StartMenuProps {
  onClose: () => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose }) => {
  const { openWindow } = useWindows();

  const handleProgramClick = (program: string) => {
    switch (program) {
      case 'notepad':
        openWindow({
          title: 'Untitled - Notepad',
          content: <Notepad />,
          x: 200,
          y: 200,
          width: 500,
          height: 400,
          minimized: false,
          maximized: false,
        });
        break;
      case 'calculator':
        openWindow({
          title: 'Calculator',
          content: <Calculator />,
          x: 250,
          y: 250,
          width: 250,
          height: 320,
          minimized: false,
          maximized: false,
        });
        break;
      case 'ie':
        openWindow({
          title: 'Internet Explorer',
          content: <InternetExplorer />,
          x: 120,
          y: 80,
          width: 600,
          height: 500,
          minimized: false,
          maximized: false,
        });
        break;
      case 'games':
        openWindow({
          title: 'Games',
          content: <Games />,
          x: 180,
          y: 120,
          width: 400,
          height: 350,
          minimized: false,
          maximized: false,
        });
        break;
      case 'yahoo':
        openWindow({
          title: 'Yahoo! Messenger',
          content: <YahooMessenger />,
          x: 300,
          y: 150,
          width: 280,
          height: 400,
          minimized: false,
          maximized: false,
        });
        break;
    }
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute bottom-10 left-0 w-64 bg-gray-300 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 z-[9999]" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-2 text-sm font-bold">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-200 border border-gray-400 mr-2 flex items-center justify-center text-blue-600 font-bold text-lg">
              👤
            </div>
            <div>
              <div className="text-white">Windows</div>
              <div className="text-gray-200 text-xs">98</div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-1">
          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-yellow-500 border border-gray-400"></div>
            Programs
            <span className="ml-auto">▶</span>
          </div>
          
          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-blue-500 border border-gray-400"></div>
            Documents
            <span className="ml-auto">▶</span>
          </div>

          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-gray-500 border border-gray-400"></div>
            Settings
            <span className="ml-auto">▶</span>
          </div>

          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-green-500 border border-gray-400"></div>
            Find
            <span className="ml-auto">▶</span>
          </div>

          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-blue-400 border border-gray-400"></div>
            Help
          </div>

          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-gray-600 border border-gray-400"></div>
            Run...
          </div>

          <hr className="my-1 border-gray-600" />

          <div 
            className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm"
            onClick={() => handleProgramClick('ie')}
          >
            <div className="w-4 h-4 mr-3 bg-blue-600 border border-gray-400 flex items-center justify-center text-white text-xs font-bold">e</div>
            Internet Explorer
          </div>

          <div 
            className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm"
            onClick={() => handleProgramClick('notepad')}
          >
            <div className="w-4 h-4 mr-3 bg-white border border-gray-400"></div>
            Notepad
          </div>

          <div 
            className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm"
            onClick={() => handleProgramClick('calculator')}
          >
            <div className="w-4 h-4 mr-3 bg-gray-300 border border-gray-400"></div>
            Calculator
          </div>

          <div 
            className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm"
            onClick={() => handleProgramClick('games')}
          >
            <div className="w-4 h-4 mr-3 bg-red-500 border border-gray-400"></div>
            Games
          </div>

          <div 
            className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm"
            onClick={() => handleProgramClick('yahoo')}
          >
            <div className="w-4 h-4 mr-3 bg-purple-600 border border-gray-400 flex items-center justify-center text-white text-xs font-bold">Y!</div>
            Yahoo! Messenger
          </div>

          <hr className="my-1 border-gray-600" />

          <div className="hover:bg-blue-600 hover:text-white p-2 cursor-pointer flex items-center text-sm">
            <div className="w-4 h-4 mr-3 bg-red-600 border border-gray-400"></div>
            Shut Down...
          </div>
        </div>
      </div>
    </>
  );
};

export default StartMenu;