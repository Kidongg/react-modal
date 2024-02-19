import { useContext } from "react";
import Context from "../context/Context";

const useModal = () => {
  const { isModal, openModal, closeModal } = useContext(Context);

  return { isModal, openModal, closeModal };
};

export default useModal;
