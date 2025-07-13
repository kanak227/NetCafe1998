import React, { useState, useRef, useEffect } from "react";

interface DeskletProps {
  icon: React.ComponentType<any>;
  label: string;
  onDoubleClick: () => void;
  initialX?: number;
  initialY?: number;
}

const Desklet: React.FC<DeskletProps> = ({
  icon: Icon,
  label,
  onDoubleClick,
  initialX = 0,
  initialY = 0,
}) => {
  const [selected, setSelected] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const iconRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.detail === 1) {
      setSelected(true);
      setIsDragging(true);

      const rect = iconRef.current?.getBoundingClientRect();
      if (rect) {
        dragOffsetRef.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
      }

      e.preventDefault();
    }
  };

  const handleDoubleClick = () => {
    onDoubleClick();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newX = Math.max(
          0,
          Math.min(e.clientX - dragOffsetRef.current.x, window.innerWidth - 80)
        );
        const newY = Math.max(
          0,
          Math.min(
            e.clientY - dragOffsetRef.current.y,
            window.innerHeight - 100
          )
        );
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (iconRef.current && !iconRef.current.contains(e.target as Node)) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={iconRef}
      className={`absolute flex flex-col items-center p-2 cursor-pointer select-none w-20 ${
        selected ? "bg-blue-500 bg-opacity-30" : ""
      } ${isDragging ? "z-50" : "z-10"}`}
      style={{
        left: position.x,
        top: position.y,
        userSelect: "none",
      }}
      onMouseDown={handleMouseDown}
      onDoubleClick={handleDoubleClick}
    >
      <div className="mb-1 pointer-events-none">
        <Icon variant="32x32_4" />
      </div>
      <span className="text-white text-xs text-center font-bold drop-shadow-lg pointer-events-none">
        {label}
      </span>
    </div>
  );
};

export default Desklet;
