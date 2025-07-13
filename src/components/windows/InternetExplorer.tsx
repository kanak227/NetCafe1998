import React, { useState } from 'react';

const InternetExplorer: React.FC = () => {
  const [url, setUrl] = useState('http://www.yahoo.com');
  const [currentPage, setCurrentPage] = useState('yahoo');

  const handleNavigate = (page: string, newUrl: string) => {
    setCurrentPage(page);
    setUrl(newUrl);
  };

  const handleGo = () => {
    const lower = url.toLowerCase();
    if (lower.includes('msn')) {
      handleNavigate('msn', url);
    } else if (lower.includes('yahoo')) {
      handleNavigate('yahoo', url);
    } else {
      setCurrentPage('404');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'yahoo':
        return (
          <div className="p-4 bg-white text-sm">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-purple-800">Yahoo!</h1>
              <p className="text-gray-700">The Web's Most Popular Starting Point</p>
            </div>
            <div className="border border-gray-400 p-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold">Search:</span>
                <input type="text" className="border border-gray-400 px-1 py-0.5 w-full" />
                <button className="ml-2 px-2 py-0.5 border border-gray-400 bg-gray-300 text-xs shadow-inner">Search</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-blue-800">Categories</h3>
                <ul className="list-disc list-inside text-blue-600 underline">
                  <li>Arts & Humanities</li>
                  <li>Business & Economy</li>
                  <li>Computers & Internet</li>
                  <li>Entertainment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-blue-800">News & Media</h3>
                <ul className="list-disc list-inside text-blue-600 underline">
                  <li>Today's News</li>
                  <li>Weather</li>
                  <li>Sports</li>
                  <li>Stock Quotes</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'msn':
        return (
          <div className="p-4 bg-white text-sm">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-bold text-blue-800">MSN.com</h1>
              <p className="text-gray-700">Microsoft Network</p>
            </div>
            <div className="space-y-3">
              <div className="border border-gray-400 p-2">
                <h3 className="font-bold">Today's Headlines</h3>
                <p>Welcome to the Microsoft Network - Your gateway to the internet</p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border border-gray-400 p-2 text-xs">
                  <strong className="text-blue-800">Hotmail</strong>
                  <p>Free email service</p>
                </div>
                <div className="border border-gray-400 p-2 text-xs">
                  <strong className="text-blue-800">Messenger</strong>
                  <p>Instant messaging</p>
                </div>
                <div className="border border-gray-400 p-2 text-xs">
                  <strong className="text-blue-800">Communities</strong>
                  <p>Online groups</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-4 bg-white text-center">
            <h2 className="text-xl mb-4">Page Not Found</h2>
            <p className="text-sm">The page you requested could not be found.</p>
          </div>
        );
    }
  };

  return (
    <div className="h-full bg-gray-300 flex flex-col text-xs" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      {/* Menu Bar */}
      <div className="bg-gray-100 border-b flex text-xs">
        {['File', 'Edit', 'View', 'Go', 'Favorites', 'Help'].map(label => (
          <button key={label} className="px-3 py-1 hover:bg-blue-600 hover:text-white">
            {label}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-1">
        {['Back', 'Forward', 'Stop', 'Refresh', 'Home'].map(label => (
          <button
            key={label}
            className="px-2 py-0.5 border border-gray-400 bg-gray-300 hover:bg-gray-200 shadow-inner"
          >
            {label}
          </button>
        ))}
      </div>

      {/* Address Bar */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-2">
        <span className="text-xs">Address:</span>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-2 py-0.5 border border-gray-400 text-xs"
        />
        <button
          onClick={handleGo}
          className="px-2 py-0.5 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs shadow-inner"
        >
          Go
        </button>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-200 border-b p-1 flex items-center gap-2 text-xs">
        <span>Links:</span>
        <button onClick={() => handleNavigate('yahoo', 'http://www.yahoo.com')} className="text-blue-600 underline hover:text-blue-800">
          Yahoo!
        </button>
        <button onClick={() => handleNavigate('msn', 'http://www.msn.com')} className="text-blue-600 underline hover:text-blue-800">
          MSN
        </button>
      </div>

      {/* Main Page */}
      <div className="flex-1 overflow-auto border-t border-gray-400 bg-white">
        {renderPage()}
      </div>

      {/* Status Bar */}
      <div className="bg-gray-200 border-t px-2 py-1">Done</div>
    </div>
  );
};

export default InternetExplorer;
