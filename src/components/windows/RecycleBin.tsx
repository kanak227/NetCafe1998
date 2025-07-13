import React from 'react';
import { FileText, Folder, Image } from 'lucide-react';

const RecycleBin: React.FC = () => {
  const deletedItems = [
    { name: 'Old Document.txt', type: 'text', size: '2 KB', date: '12/15/2023' },
    { name: 'Vacation Photos', type: 'folder', size: '15 MB', date: '12/10/2023' },
    { name: 'Screenshot.bmp', type: 'image', size: '1.2 MB', date: '12/08/2023' },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'text':
        return <FileText size={16} className="text-blue-600" />;
      case 'folder':
        return <Folder size={16} className="text-yellow-600" />;
      case 'image':
        return <Image size={16} className="text-green-600" />;
      default:
        return <FileText size={16} className="text-gray-600" />;
    }
  };

  return (
    <div className="h-full bg-white">
      {/* Toolbar */}
      <div className="bg-gray-100 border-b p-2 text-xs">
        <button className="px-2 py-1 border border-gray-400 bg-gray-200 hover:bg-gray-300 mr-2">
          Restore
        </button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-200 hover:bg-gray-300 mr-2">
          Delete
        </button>
        <button className="px-2 py-1 border border-gray-400 bg-gray-200 hover:bg-gray-300">
          Empty Recycle Bin
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {deletedItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <div className="text-4xl mb-4">🗑️</div>
            <p>Recycle Bin is empty</p>
          </div>
        ) : (
          <div className="space-y-2">
            {deletedItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 hover:bg-blue-100 cursor-pointer border-b border-gray-200"
              >
                <div className="mr-3">
                  {getIcon(item.type)}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">
                    {item.size} • Deleted {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RecycleBin;