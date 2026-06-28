import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface DemoModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextValue>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}
