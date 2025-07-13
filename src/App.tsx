import React, { useState, useRef, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import WindowManager from './components/WindowManager';
import { WindowProvider } from './contexts/WindowContext';

function App() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <WindowProvider>
      <div className="h-screen w-screen overflow-hidden bg-teal-500 relative font-mono">
        <Desktop />
        <WindowManager />
        {showStartMenu && (
          <StartMenu onClose={() => setShowStartMenu(false)} />
        )}
        <Taskbar 
          onStartClick={() => setShowStartMenu(!showStartMenu)}
          currentTime={currentTime}
          startMenuOpen={showStartMenu}
        />
      </div>
    </WindowProvider>
  );
}

export default App;