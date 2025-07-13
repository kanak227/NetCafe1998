import React, { useState } from 'react';

const Notepad: React.FC = () => {
  const [content, setContent] = useState('');

  return (
    <div className="h-full bg-white flex flex-col">
      {/* Menu Bar */}
      <div className="bg-gray-100 border-b text-xs">
        <div className="flex">
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">File</button>
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">Edit</button>
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">Search</button>
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">Help</button>
        </div>
      </div>

      {/* Text Area */}
      <textarea
        className="flex-1 p-2 font-mono text-sm resize-none outline-none border-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type your text here..."
        style={{ fontFamily: 'Courier New, monospace' }}
      />

      {/* Status Bar */}
      <div className="bg-gray-100 border-t px-2 py-1 text-xs text-gray-600">
        Ln {content.split('\n').length}, Col {content.length - content.lastIndexOf('\n')}
      </div>
    </div>
  );
};

export default Notepad;