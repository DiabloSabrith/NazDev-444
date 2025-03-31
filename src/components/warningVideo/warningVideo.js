import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import  styles from "./warning.module.scss";
const WarningVideo= () => (
    <Result  className={styles.content}
        icon={<SmileOutlined />}
        title={<div><p className={styles.p}>Платформа развивается и в скором времени здесь появятся бесплатные образовательные видео</p></div>}
    />
);
export default WarningVideo;