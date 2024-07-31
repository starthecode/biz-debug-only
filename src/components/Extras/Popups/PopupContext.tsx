'use client';
import React, { createContext, useState } from 'react';

interface PopupContextType {
  isOpen: boolean;
  content: React.ReactNode | null;
  openPopup: (content: React.ReactNode) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType>({
  isOpen: false,
  content: null,
  openPopup: () => {},
  closePopup: () => {},
});

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const openPopup = (content: React.ReactNode) => {
    setContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <PopupContext.Provider value={{ isOpen, content, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupContext;
