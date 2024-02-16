"use client";

import { useModal } from "./hooks/useModal";
import styles from "./page.module.css";
import Modal from "./ui/modal/Modal";

export default function Home() {
  const { isModal, openModal, closeModal } = useModal();

  return (
    <main className={styles.container}>
      <button className={styles.button} onClick={openModal}>
        모달 버튼
      </button>
      {isModal && <Modal closeModal={closeModal} />}
    </main>
  );
}
