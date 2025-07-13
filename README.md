# Windows 98 Desktop Clone

A nostalgic recreation of the classic Windows 98 desktop interface built with React, TypeScript, and Vite for **OSDCHack25**. Experience the iconic Windows 98 look and feel in your modern browser!

## 🖥️ Features

### Desktop Environment
- **Classic Windows 98 Desktop**: Authentic desktop background and layout
- **Desktop Icons**: Interactive desktop icons with hover effects
- **Start Menu**: Functional start menu with program categories
- **Taskbar**: Working taskbar with system tray and clock
- **Window Management**: Draggable, resizable, and minimizable windows

### Applications
- **My Computer**: File system browser
- **Notepad**: Simple text editor
- **Calculator**: Functional calculator with classic design
- **Recycle Bin**: File deletion simulation
- **Internet Explorer**: Web browser interface
- **Yahoo Messenger**: Chat application interface

### Games
- **Snake**: Classic snake game
- **Minesweeper**: Logic puzzle game
- **Solitaire**: Card game

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the Windows 98 desktop

## 📁 Project Structure

```
src/
├── components/
│   ├── windows/
│   │   ├── games/
│   │   │   ├── SnakeGame.tsx
│   │   │   ├── Minesweeper.tsx
│   │   │   └── Solitaire.tsx
│   │   ├── MyComputer.tsx
│   │   ├── Notepad.tsx
│   │   ├── Calculator.tsx
│   │   ├── RecycleBin.tsx
│   │   ├── InternetExplorer.tsx
│   │   ├── YahooMessenger.tsx
│   │   └── Games.tsx
│   ├── Desktop.tsx
│   ├── StartMenu.tsx
│   ├── Taskbar.tsx
│   ├── Window.tsx
│   ├── WindowManager.tsx
│   └── DesktopIcon.tsx
├── contexts/
│   └── WindowContext.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎮 How to Use

### Desktop Navigation
- **Click and drag** desktop icons to move them around
- **Double-click** icons to open applications
- **Right-click** for context menus (where implemented)

### Window Management
- **Drag** window title bars to move windows
- **Resize** windows by dragging their edges
- **Minimize** windows using the minimize button
- **Maximize** windows using the maximize button
- **Close** windows using the X button

### Applications
- **My Computer**: Browse through simulated file system
- **Notepad**: Type and edit text
- **Calculator**: Perform basic calculations
- **Games**: Play classic Windows games
- **Internet Explorer**: Browse web content
- **Yahoo Messenger**: Simulate chat functionality

## 🎨 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **ESLint** - Code linting

## 🎯 Key Features

### Window System
- Multi-window support
- Window stacking and focus management
- Resizable and draggable windows
- Window state persistence

### Desktop Environment
- Authentic Windows 98 styling
- Functional start menu
- Working taskbar with system tray
- Desktop icon management

### Applications
- Multiple functional applications
- Classic Windows 98 UI design
- Interactive elements and animations

## 🔧 Development

### Adding New Applications
1. Create a new component in `src/components/windows/`
2. Add the application to the start menu in `StartMenu.tsx`
3. Register the window in the `WindowContext`

### Styling
The project uses Tailwind CSS for styling. The Windows 98 theme is achieved through custom CSS classes and Tailwind utilities.

### State Management
Window state is managed through React Context (`WindowContext.tsx`), providing a centralized way to handle window operations.

## 📝 License

This project is for educational and nostalgic purposes. Windows 98 is a trademark of Microsoft Corporation.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new applications
- Improve existing functionality
- Fix bugs
- Enhance the UI/UX

## 🎉 Acknowledgments

- Microsoft for the original Windows 98 design
- The React and Vite communities for excellent tooling
- All contributors who help maintain this nostalgic project

---

*Relive the golden age of computing with this Windows 98 desktop clone!* 🖥️✨ 