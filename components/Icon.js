import styles from '../styles/Icon.module.css'

const Icon = (props) => {
    return (
        <span
            className={`${styles.icon} ${props.className ? props.className : ''}`}
            onClick={props.onClick}
            style={props.style}
        >
            {props.children}
        </span>
    );
}

export default Icon;