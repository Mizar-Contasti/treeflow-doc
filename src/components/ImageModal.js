import React, { useState } from 'react';
import styles from './ImageModal.module.css';

export default function ImageModal({ src, alt, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <img 
          src={src} 
          alt={alt} 
          className={styles.thumbnailImage} 
          onClick={openModal}
        />
        <div className={styles.clickHint}>Click para ampliar</div>
      </div>

      {isOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{alt}</h3>
              <button className={styles.closeButton} onClick={closeModal}>×</button>
            </div>
            <div className={styles.modalBody}>
              <img src={src} alt={alt} className={styles.modalImage} />
              {description && (
                <div className={styles.modalDescription}>
                  {description}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
