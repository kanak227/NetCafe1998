import React from 'react';
import { useWindows } from '../contexts/WindowContext';
import Window from './Window';

const WindowManager: React.FC = () => {
  const { windows } = useWindows();

  return (
    <>
      {windows.map(window => (
        <Window key={window.id} window={window} />
      ))}
    </>
  );
};

export default WindowManager;