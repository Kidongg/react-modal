"use client";

import { useState } from "react";
import Context from "./Context";

const Provider = ({ children }: { children: React.ReactNode }) => {
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
    <Context.Provider
      value={{
        isModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Provider;
