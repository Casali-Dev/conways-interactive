import { createContext, ReactNode, useContext, useState } from 'react';

interface CellContextData {
  aliveColor: string;
  deadColor: string;
  cellShape: string;
  updateCell: (status: "dead" | "alive" | "shape", value: string) => void;
}

interface IUpdateCell {
  status: "dead" | "alive" | "shape";
  value: string;
}

interface CellProviderProps {
  children: ReactNode;
}

const CellContext = createContext<CellContextData>({} as CellContextData);

export function CellProvider({children}: CellProviderProps): JSX.Element {
  const [aliveColor, setAliveColor] = useState('000000');
  const [deadColor, setDeadColor] = useState('CCCCCC');
  const [cellShape, setCellShape] = useState('box');

  const updateCell = (status: "dead" | "alive" | "shape", value: string) => {
    switch (status) {
      case "alive": {
        setAliveColor(value);
        break;
      }
      case "dead": {
        setDeadColor(value);
        break;
      }
      case "shape": {
        setCellShape(value);
        break;
      }
      default: {
        break;
      }
    }
  }

  return (
    <CellContext.Provider
      value={{ aliveColor, deadColor, cellShape, updateCell }}
    >
      {children}
    </CellContext.Provider>
  );
}

  export function useCell(): CellContextData {
  const context = useContext(CellContext);

  return context;
}