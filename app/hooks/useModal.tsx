"use client";

import { createContext, useContext, useState } from "react";

const ModalContext = createContext<any>({});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  // 모달 상태
  const [isModal, setIsModal] = useState(false);

  // 모달 열기
  const openModal = () => {
    setIsModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModal(false);
  };

  // 모달 상태와 열기, 닫기 함수를 전달
  return (
    <ModalContext.Provider
      value={{
        isModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// 모달 컨텍스트 훅
export const useModal = () => useContext(ModalContext);
