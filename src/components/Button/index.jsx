import React, { useState } from 'react';
import styles from './styles.module.scss'
import { FaWhatsapp } from 'react-icons/fa'
import ReactLoading from 'react-loading';

function Button({ content }) {

    const [isLoading, setIsLoading] = useState(false);

    function showLoading(){
        if(content != "FALE CONOSCO"){
            setIsLoading(true)
        }
    }


    return (
        <button className={styles.containerStyleButton} onClick={showLoading}>
            
            {!isLoading ? (
            content == "FALE CONOSCO" ?
                (
                        <>
                            <FaWhatsapp size={18} />
                            <span>{content}</span>
                        </>                    
                )     
                : (
                    <span>{content}</span>
                )
            ) : (
                <ReactLoading type='spinningBubbles' color="#fff" height={20} width={20} />
            )
        }
        </button>
    );
}

export default Button;