import React from 'react'
import stylesOverlay from"./Overlay_Left.module.scss"
export  default function Overlay_Left () {
    return (
        <div className={styles.overlay}>
            <ul>
                <li>Number</li>
                <li>BigInt</li>
                <li>String</li>
                <li>Undefined</li>
                <li>Boolean</li>
            </ul>
        </div>
    )
}