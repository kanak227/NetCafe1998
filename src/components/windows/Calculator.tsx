import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const Button: React.FC<{ onClick: () => void; children: React.ReactNode; className?: string }> = ({ 
    onClick, 
    children, 
    className = '' 
  }) => (
    <button
      className={`h-8 border-2 border-gray-400 border-t-white border-l-white bg-gray-300 hover:bg-gray-200 active:border-gray-600 active:border-t-gray-800 active:border-l-gray-800 text-sm font-bold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <div className="h-full bg-gray-300 p-2">
      {/* Menu Bar */}
      <div className="bg-gray-100 border-b text-xs mb-2">
        <div className="flex">
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">View</button>
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">Edit</button>
          <button className="px-3 py-1 hover:bg-blue-500 hover:text-white">Help</button>
        </div>
      </div>

      {/* Display */}
      <div className="bg-white border-2 border-gray-600 border-t-gray-800 border-l-gray-800 p-2 mb-2 text-right font-mono text-lg">
        {display}
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-1">
        <Button onClick={clear} className="bg-red-300 hover:bg-red-200">C</Button>
        <Button onClick={() => {}} className="bg-yellow-300 hover:bg-yellow-200">±</Button>
        <Button onClick={() => {}} className="bg-yellow-300 hover:bg-yellow-200">%</Button>
        <Button onClick={() => inputOperation('/')} className="bg-blue-300 hover:bg-blue-200">÷</Button>

        <Button onClick={() => inputNumber('7')}>7</Button>
        <Button onClick={() => inputNumber('8')}>8</Button>
        <Button onClick={() => inputNumber('9')}>9</Button>
        <Button onClick={() => inputOperation('*')} className="bg-blue-300 hover:bg-blue-200">×</Button>

        <Button onClick={() => inputNumber('4')}>4</Button>
        <Button onClick={() => inputNumber('5')}>5</Button>
        <Button onClick={() => inputNumber('6')}>6</Button>
        <Button onClick={() => inputOperation('-')} className="bg-blue-300 hover:bg-blue-200">-</Button>

        <Button onClick={() => inputNumber('1')}>1</Button>
        <Button onClick={() => inputNumber('2')}>2</Button>
        <Button onClick={() => inputNumber('3')}>3</Button>
        <Button onClick={() => inputOperation('+')} className="bg-blue-300 hover:bg-blue-200">+</Button>

        <Button onClick={() => inputNumber('0')} className="col-span-2">0</Button>
        <Button onClick={() => inputNumber('.')}>.</Button>
        <Button onClick={performCalculation} className="bg-green-300 hover:bg-green-200">=</Button>
      </div>
    </div>
  );
};

export default Calculator;