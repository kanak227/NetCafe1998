import React, { useState } from 'react';

const InternetExplorer: React.FC = () => {
  const [url, setUrl] = useState('http://www.yahoo.com');
  const [currentPage, setCurrentPage] = useState('yahoo');

  const handleNavigate = (page: string, newUrl: string) => {
    setCurrentPage(page);
    setUrl(newUrl);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'yahoo':
        return (
          <div className="p-4 bg-white">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-purple-800 mb-2">Yahoo!</h1>
              <div className="text-sm text-gray-600">The Web's Most Popular Starting Point</div>
            </div>
            <div className="border border-gray-400 p-3 mb-4">
              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">Search:</span>
                <input type="text" className="border border-gray-400 px-2 py-1 flex-1" placeholder="Enter keywords" />
                <button className="ml-2 px-3 py-1 bg-gray-300 border border-gray-400">Search</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-bold text-blue-800 mb-2">Categories</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-blue-600 underline">Arts & Humanities</a></li>
                  <li><a href="#" className="text-blue-600 underline">Business & Economy</a></li>
                  <li><a href="#" className="text-blue-600 underline">Computers & Internet</a></li>
                  <li><a href="#" className="text-blue-600 underline">Entertainment</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 mb-2">News & Media</h3>
                <ul className="space-y-1">
                  <li><a href="#" className="text-blue-600 underline">Today's News</a></li>
                  <li><a href="#" className="text-blue-600 underline">Weather</a></li>
                  <li><a href="#" className="text-blue-600 underline">Sports</a></li>
                  <li><a href="#" className="text-blue-600 underline">Stock Quotes</a></li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'msn':
        return (
          <div className="p-4 bg-white">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-blue-800 mb-2">MSN.com</h1>
              <div className="text-sm text-gray-600">Microsoft Network</div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="border border-gray-400 p-2">
                <h3 className="font-bold">Today's Headlines</h3>
                <p>Welcome to the Microsoft Network - Your gateway to the internet</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-gray-400 p-2">
                  <h4 className="font-bold text-blue-800">Hotmail</h4>
                  <p className="text-xs">Free email service</p>
                </div>
                <div className="border border-gray-400 p-2">
                  <h4 className="font-bold text-blue-800">Messenger</h4>
                  <p className="text-xs">Instant messaging</p>
                </div>
                <div className="border border-gray-400 p-2">
                  <h4 className="font-bold text-blue-800">Communities</h4>
                  <p className="text-xs">Online groups</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-4 bg-white text-center">
            <h2 className="text-xl mb-4">Page Not Found</h2>
            <p>The page you requested could not be found.</p>
          </div>
        );
    }
  };

  return (
    <div className="h-full bg-gray-300 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      {/* Menu Bar */}
      <div className="bg-gray-100 border-b text-xs">
        <div className="flex">
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">File</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Edit</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">View</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Go</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Favorites</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Help</button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-1">
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Back</button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Forward</button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Stop</button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Refresh</button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Home</button>
      </div>

      {/* Address Bar */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-2">
        <span className="text-xs">Address:</span>
        <input 
          type="text" 
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-2 py-1 border border-gray-400 text-xs"
        />
        <button className="px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs">Go</button>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-2 text-xs">
        <span>Links:</span>
        <button 
          onClick={() => handleNavigate('yahoo', 'http://www.yahoo.com')}
          className="text-blue-600 underline hover:text-blue-800"
        >
          Yahoo!
        </button>
        <button 
          onClick={() => handleNavigate('msn', 'http://www.msn.com')}
          className="text-blue-600 underline hover:text-blue-800"
        >
          MSN
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {renderPage()}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t px-2 py-1 text-xs">
        Done
      </div>
    </div>
  );
};

export default InternetExplorer;