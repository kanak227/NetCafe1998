import React from 'react';
import { HardDrive, Disc, Folder } from 'lucide-react';

const MyComputer: React.FC = () => {
  return (
    <div className="h-full bg-white p-4">
      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer">
          <HardDrive size={32} className="text-gray-600 mb-2" />
          <span className="text-xs text-center">Local Disk (C:)</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer">
          <HardDrive size={32} className="text-gray-600 mb-2" />
          <span className="text-xs text-center">Local Disk (D:)</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer">
          <Disc size={32} className="text-blue-600 mb-2" />
          <span className="text-xs text-center">CD-ROM (E:)</span>
        </div>
        <div className="flex flex-col items-center p-2 hover:bg-blue-100 cursor-pointer">
          <Folder size={32} className="text-yellow-600 mb-2" />
          <span className="text-xs text-center">Control Panel</span>
        </div>
      </div>
      
      <div className="mt-6 border-t pt-4">
        <h3 className="font-bold text-sm mb-2">System Information</h3>
        <div className="text-xs space-y-1">
          <div>System: Microsoft Windows 98</div>
          <div>Registered to: Windows User</div>
          <div>Computer: Intel Pentium II Processor</div>
          <div>Memory: 64.0 MB of RAM</div>
        </div>
      </div>
    </div>
  );
};

export default MyComputer;