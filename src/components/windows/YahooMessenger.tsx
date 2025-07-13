import React, { useState } from 'react';

const YahooMessenger: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedContact, setSelectedContact] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{from: string, text: string, time: string}>>([]);

  const contacts = [
    { name: 'John_Smith98', status: 'online', avatar: '😊' },
    { name: 'Sarah_Cool', status: 'away', avatar: '😎' },
    { name: 'Mike_Gamer', status: 'online', avatar: '🎮' },
    { name: 'Lisa_Music', status: 'offline', avatar: '🎵' },
    { name: 'Tom_Sports', status: 'busy', avatar: '⚽' },
  ];

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedContact) {
      const newMessage = {
        from: 'You',
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      
      // Simulate response
      setTimeout(() => {
        const responses = [
          'Hey there!', 'How are you?', 'What\'s up?', 'Cool!', 'LOL', 'BRB', 'TTYL'
        ];
        const response = {
          from: selectedContact,
          text: responses[Math.floor(Math.random() * responses.length)],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, response]);
      }, 1000);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600';
      case 'away': return 'text-yellow-600';
      case 'busy': return 'text-red-600';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return '🟢';
      case 'away': return '🟡';
      case 'busy': return '🔴';
      default: return '⚫';
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="h-full bg-purple-100 p-4 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-purple-800 mb-2">Yahoo! Messenger</div>
          <div className="text-sm text-gray-600">Sign in to chat with friends</div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white border-2 border-gray-400 border-t-white border-l-white p-6 w-full max-w-xs">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Yahoo! ID:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-2 py-1 border border-gray-400 text-sm"
                placeholder="Enter your Yahoo! ID"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-bold mb-1">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-2 py-1 border border-gray-400 text-sm"
                placeholder="Enter password"
              />
            </div>

            <div className="mb-4">
              <label className="flex items-center text-xs">
                <input type="checkbox" className="mr-1" />
                Remember my ID & Password
              </label>
            </div>

            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 border-2 border-white border-t-white border-l-white border-r-gray-600 border-b-gray-600 bg-gray-300 hover:bg-gray-200 text-sm font-bold"
            >
              Sign In
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 underline text-xs">Get a Yahoo! ID</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-gray-300 flex flex-col" style={{ fontFamily: 'MS Sans Serif, sans-serif' }}>
      {/* Menu Bar */}
      <div className="bg-gray-100 border-b text-xs">
        <div className="flex">
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Messenger</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Contacts</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Actions</button>
          <button className="px-3 py-1 hover:bg-blue-600 hover:text-white">Help</button>
        </div>
      </div>

      {/* User Info */}
      <div className="bg-purple-200 p-2 border-b flex items-center">
        <div className="w-8 h-8 bg-purple-600 border border-gray-400 rounded-full flex items-center justify-center text-white font-bold mr-2">
          {username.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="text-sm font-bold">{username}</div>
          <div className="text-xs text-gray-600">Online</div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Contacts List */}
        <div className="w-full bg-white border-r">
          <div className="bg-gray-200 p-2 text-sm font-bold border-b">
            Contacts ({contacts.filter(c => c.status === 'online').length} online)
          </div>
          
          <div className="overflow-auto">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`p-2 border-b cursor-pointer hover:bg-blue-100 flex items-center ${
                  selectedContact === contact.name ? 'bg-blue-200' : ''
                }`}
                onClick={() => setSelectedContact(contact.name)}
              >
                <div className="mr-2 text-lg">{contact.avatar}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{contact.name}</div>
                  <div className={`text-xs flex items-center ${getStatusColor(contact.status)}`}>
                    <span className="mr-1">{getStatusIcon(contact.status)}</span>
                    {contact.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Window (appears when contact is selected) */}
      {selectedContact && (
        <div className="absolute top-8 right-4 w-64 h-48 bg-white border-2 border-gray-400 border-t-white border-l-white shadow-lg">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white p-1 text-xs font-bold flex justify-between items-center">
            <span>Chat with {selectedContact}</span>
            <button 
              onClick={() => setSelectedContact(null)}
              className="w-4 h-4 bg-gray-300 border border-gray-400 text-black flex items-center justify-center hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
          
          <div className="h-32 overflow-auto p-2 text-xs">
            {messages.map((msg, index) => (
              <div key={index} className="mb-1">
                <span className="font-bold text-blue-600">{msg.from}:</span>
                <span className="ml-1">{msg.text}</span>
                <div className="text-gray-500 text-xs">{msg.time}</div>
              </div>
            ))}
          </div>
          
          <div className="border-t p-1 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-1 py-1 border border-gray-400 text-xs"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSendMessage}
              className="ml-1 px-2 py-1 border border-gray-400 bg-gray-300 hover:bg-gray-200 text-xs"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YahooMessenger;