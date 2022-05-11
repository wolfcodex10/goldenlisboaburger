import React from 'react';
import styles from './styles.module.scss'
import { FaWhatsapp } from 'react-icons/fa'

function ButtonWhatsapp({ content }) {
  return (
    <button className={styles.containerButtonWhatsapp}>
        <FaWhatsapp size={24} />
        <span>{content}</span>
    </button>
  );
}

export default ButtonWhatsapp;