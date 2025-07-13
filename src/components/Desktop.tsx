import React from "react";
import DesktopIcon from "./DesktopIcon";
import Desklet from "./Desklet";
import { Computer, RecycleFull, Globe } from "@react95/icons";
import {
  Notepad as NotepadIcon,
  Calculator as CalculatorIcon,
} from "@react95/icons";
import { useWindows } from "../contexts/WindowContext";
import MyComputer from "./windows/MyComputer";
import RecycleBin from "./windows/RecycleBin";
import Notepad from "./windows/Notepad";
import Calculator from "./windows/Calculator";
import InternetExplorer from "./windows/InternetExplorer";
import Games from "./windows/Games";
import YahooMessenger from "./windows/YahooMessenger";

const Desktop: React.FC = () => {
  const { openWindow } = useWindows();

  const handleMyComputerOpen = () => {
    openWindow({
      title: "My Computer",
      content: <MyComputer />,
      x: 100,
      y: 100,
      width: 500,
      height: 400,
      minimized: false,
      maximized: false,
    });
  };

  const handleRecycleBinOpen = () => {
    openWindow({
      title: "Recycle Bin",
      content: <RecycleBin />,
      x: 150,
      y: 150,
      width: 400,
      height: 300,
      minimized: false,
      maximized: false,
    });
  };

  const handleNotepadOpen = () => {
    openWindow({
      title: "Untitled - Notepad",
      content: <Notepad />,
      x: 200,
      y: 200,
      width: 500,
      height: 400,
      minimized: false,
      maximized: false,
    });
  };

  const handleCalculatorOpen = () => {
    openWindow({
      title: "Calculator",
      content: <Calculator />,
      x: 250,
      y: 250,
      width: 250,
      height: 320,
      minimized: false,
      maximized: false,
    });
  };

  const handleInternetExplorerOpen = () => {
    openWindow({
      title: "Internet Explorer",
      content: <InternetExplorer />,
      x: 120,
      y: 80,
      width: 600,
      height: 500,
      minimized: false,
      maximized: false,
    });
  };

  const handleGamesOpen = () => {
    openWindow({
      title: "Games",
      content: <Games />,
      x: 180,
      y: 120,
      width: 400,
      height: 350,
      minimized: false,
      maximized: false,
    });
  };

  const handleYahooMessengerOpen = () => {
    openWindow({
      title: "Yahoo! Messenger",
      content: <YahooMessenger />,
      x: 300,
      y: 150,
      width: 280,
      height: 400,
      minimized: false,
      maximized: false,
    });
  };

  return (
    <div
      className="absolute inset-0 p-4 z-0"
      style={{
        backgroundImage: 'url("/images/background.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Desklet
        initialX={20}
        initialY={20}
        icon={Computer}
        label={"My Computer"}
        onDoubleClick={handleMyComputerOpen}
      />

      <Desklet
        initialX={20}
        initialY={120}
        icon={RecycleFull}
        label="Recycle Bin"
        onDoubleClick={handleRecycleBinOpen}
      />

      <Desklet
        initialX={20}
        initialY={220}
        icon={NotepadIcon}
        label="Notepad"
        onDoubleClick={handleNotepadOpen}
      />

      <Desklet
        initialX={120}
        initialY={20}
        icon={Globe}
        label="Internet Explorer"
        onDoubleClick={handleInternetExplorerOpen}
      />

      <Desklet
        initialX={20}
        initialY={320}
        icon={CalculatorIcon}
        label="Calculator"
        onDoubleClick={handleCalculatorOpen}
      />

      <DesktopIcon
        initialX={120}
        initialY={120}
        icon={
          <div
            className="w-8 h-8 relative"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Games */}
            <div className="absolute inset-0">
              {/* Game controller base */}
              <div className="w-6 h-4 bg-gray-400 border border-black absolute top-2 left-1 rounded-sm">
                {/* D-pad */}
                <div className="w-1 h-1 bg-gray-600 absolute top-1 left-1"></div>
                {/* Buttons */}
                <div className="w-1 h-1 bg-red-500 border border-black absolute top-0.5 right-1 rounded-full"></div>
                <div className="w-1 h-1 bg-blue-500 border border-black absolute top-2 right-1 rounded-full"></div>
              </div>
              {/* Cards/dice accent */}
              <div className="w-2 h-2 bg-white border border-black absolute top-0 left-0">
                <div className="w-0.5 h-0.5 bg-red-600 absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
        }
        label="Games"
        onDoubleClick={handleGamesOpen}
      />

      <DesktopIcon
        initialX={120}
        initialY={220}
        icon={
          <div
            className="w-8 h-8 relative"
            style={{ imageRendering: "pixelated" }}
          >
            {/* Yahoo Messenger */}
            <div className="absolute inset-0">
              {/* Main purple background */}
              <div className="w-6 h-6 bg-purple-600 border border-black absolute top-1 left-1">
                {/* Y! logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-xs leading-none">
                    Y!
                  </div>
                </div>
              </div>
              {/* Chat bubble accent */}
              <div className="w-2 h-1 bg-white border border-black absolute top-0 right-1 rounded-sm"></div>
              <div className="w-1 h-1 bg-white border border-black absolute top-1 right-0"></div>
            </div>
          </div>
        }
        label="Yahoo! Messenger"
        onDoubleClick={handleYahooMessengerOpen}
      />
    </div>
  );
};

export default Desktop;
