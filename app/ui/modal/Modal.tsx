import styles from "./modal.module.css";

const Modal = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>모달 내용</div>
        <div className={styles.button} onClick={closeModal}>
          모달 닫기
        </div>
      </div>
    </div>
  );
};

export default Modal;
