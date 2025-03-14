
'use client'
import React from 'react';
import { Collapse } from 'antd';
import styles from './accordion.module.scss'
const text = `
let n = 123;
n = 12.345;
`;
const items = [
    {
        key: '1',
        label: 'Примеры',
        children: <p>{text}</p>,
    },

];
const Accordion = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return <Collapse className={styles.accordion} items={items} defaultActiveKey={['1']} onChange={onChange} />;
};
export default Accordion;