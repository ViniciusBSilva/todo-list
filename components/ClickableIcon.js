import React from 'react';
import styles from '../styles/ClickableIcon.module.css'
import Icon from './Icon';

const ClickableIcon = (props) => {

    return (

        <Icon
            className={styles.ClickableIcon}
            onClick={props.onClick}
        >
            {props.children}
        </Icon>

    );
}

export default ClickableIcon;