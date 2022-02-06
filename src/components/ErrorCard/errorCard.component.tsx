import React, { FC } from 'react'
import styles from './errorCard.module.css';

type ErrorCardProps = {
    message: string;
}

const ErrorCard: FC<ErrorCardProps> = ({ message }) => {
    return (
        <div className={styles.container}>
            <p className={styles.messageText}>{message}</p>
        </div>
    )
}

export default ErrorCard
