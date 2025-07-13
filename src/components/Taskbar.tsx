import React from "react";
import { useWindows } from "../contexts/WindowContext";

interface TaskbarProps {
  onStartClick: () => void;
  currentTime: Date;
  startMenuOpen: boolean;
}

const Taskbar: React.FC<TaskbarProps> = ({
  onStartClick,
  currentTime,
  startMenuOpen,
}) => {
  const { windows, focusWindow, minimizeWindow } = useWindows();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gray-300 border-t-2 border-white border-l-2 border-l-white border-r-2 border-r-gray-600 border-b-2 border-b-gray-600 flex items-center px-1">
      {/* Start Button */}
      <button
        className={`h-8 px-3 mr-2 text-sm font-bold flex items-center border-2 ${
          startMenuOpen
            ? "border-gray-600 border-t-gray-800 border-l-gray-800 bg-gray-200"
            : "border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200"
        }`}
        onClick={onStartClick}
        style={{ fontFamily: "MS Sans Serif, sans-serif" }}
      >
        <div className="w-4 h-4 mr-2 flex items-center justify-center text-white text-xs font-bold border-gray-400">
          {
            /* <span style={{ fontSize: '10px' }}>⊞</span>
             */

            <img
              src="/images/logo.png"
              alt="start logo"
              className="h-5"
            />
          }
        </div>
        Start
      </button>

      {/* Separator */}
      <div className="w-px h-6 bg-gray-600 border-r border-white mr-2"></div>

      {/* Window Buttons */}
      <div className="flex-1 flex gap-1">
        {windows
          .filter((w) => !w.minimized)
          .map((window) => (
            <button
              key={window.id}
              className="h-8 px-3 text-sm border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 truncate max-w-40"
              onClick={() => focusWindow(window.id)}
              style={{ fontFamily: "MS Sans Serif, sans-serif" }}
            >
              {window.title}
            </button>
          ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center gap-2 mr-2">
        <div className="w-6 h-6 bg-gray-300 border border-gray-600 border-t-white border-l-white flex items-center justify-center text-xs">
          🔊
        </div>
      </div>

      {/* Clock */}
      <div
        className="h-8 px-3 border-2 border-gray-600 border-t-gray-800 border-l-gray-800 border-r-white border-b-white bg-gray-200 flex items-center text-sm"
        style={{ fontFamily: "MS Sans Serif, sans-serif" }}
      >
        {formatTime(currentTime)}
      </div>
    </div>
  );
};

export default Taskbar;
