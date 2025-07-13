import React, { useState, useRef, useEffect } from 'react';
import { useWindows, WindowData } from '../contexts/WindowContext';

interface WindowProps {
  window: WindowData;
}

const Window: React.FC<WindowProps> = ({ window }) => {
  const {
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize,
  } = useWindows();

  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  const handleDragMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - window.x,
      y: e.clientY - window.y,
    });
    focusWindow(window.id);
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    focusWindow(window.id);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(0, e.clientX - dragOffset.x);
        const newY = Math.max(0, e.clientY - dragOffset.y);
        updateWindowPosition(window.id, newX, newY);
      } else if (isResizing) {
        const rect = windowRef.current?.getBoundingClientRect();
        if (rect) {
          const newWidth = Math.max(200, e.clientX - rect.left);
          const newHeight = Math.max(150, e.clientY - rect.top);
          updateWindowSize(window.id, newWidth, newHeight);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    isDragging,
    isResizing,
    dragOffset,
    window.id,
    updateWindowPosition,
    updateWindowSize,
  ]);

  if (window.minimized) return null;

  return (
    <div
      ref={windowRef}
      className={`absolute bg-gray-300 border-2 border-white border-r-gray-600 border-b-gray-600 shadow-md z-[${window.zIndex}]`}
      style={{
        left: window.x,
        top: window.y,
        width: window.width,
        height: window.height,
        fontFamily: 'MS Sans Serif, sans-serif',
      }}
      onMouseDown={() => focusWindow(window.id)}
>

      {/* Title Bar */}
      <div
        className="window-header h-8 bg-gradient-to-r from-blue-800 to-blue-600 text-white flex items-center justify-between px-2 cursor-move select-none"
        onMouseDown={handleDragMouseDown}
      >
        <span className="text-sm font-bold truncate">{window.title}</span>
        <div className="flex gap-1">
          <button
            onClick={() => minimizeWindow(window.id)}
            className="w-6 h-6 bg-gray-300 border-2 border-white border-r-gray-600 border-b-gray-600 text-black flex items-center justify-center hover:bg-gray-200 text-xs font-bold"
          >
            _
          </button>
          <button
            onClick={() => maximizeWindow(window.id)}
            className="w-6 h-6 bg-gray-300 border-2 border-white border-r-gray-600 border-b-gray-600 text-black flex items-center justify-center hover:bg-gray-200 text-xs"
          >
            □
          </button>
          <button
            onClick={() => closeWindow(window.id)}
            className="w-6 h-6 bg-gray-300 border-2 border-white border-r-gray-600 border-b-gray-600 text-black flex items-center justify-center hover:bg-gray-200 text-xs font-bold"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-full overflow-hidden">{window.content}</div>

      {/* Resize Handle */}
      <div
        className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
        onMouseDown={handleResizeMouseDown}
      >
        <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-gray-600" />
      </div>
    </div>
  );
};

export default Window;
