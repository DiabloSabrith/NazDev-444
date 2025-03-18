import React from 'react';
import { Button, notification } from 'antd';
import styles from "./modal.module.scss"
const Modal = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            message: <p className={styles.p}>Простите</p>,
            description:
                <p className={styles.text}>Платформа развивается и в скором времени появятся доступ к  платные интенсивам</p>,
            duration: 3,
            style: { backgroundColor:' rgba(2, 137, 207,1)' }
        });
    };
    return (
        <>
            {contextHolder}
            <button className={styles.modalBtn} onClick={openNotification}>
                Интенсивы
            </button>
        </>
    );
};
export default Modal;