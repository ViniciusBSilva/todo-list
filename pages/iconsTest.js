import {
    FiSave, FiTag, FiStar, FiCopy, FiArchive, FiAlertCircle, FiGrid, FiList,
    FiLoader, FiRefreshCw, FiTrash, FiX, FiXCircle, FiCalendar, FiPlusSquare,
    FiMinusSquare, FiArrowUpRight, FiCircle, FiCheckCircle, FiEdit, FiEdit3, FiEdit2, FiFile
} from "react-icons/fi";

import styles from '../styles/IconsTest.module.css'

/* Icons from https://react-icons.github.io/react-icons/icons?name=fi */

const IconsTest = () => {
    return (
        <>
            <dl className={styles.list}>
                <dt className={styles.term}>Icon</dt>
                <dd className={styles.description}>IconName</dd>

                <dt className={styles.term}><FiAlertCircle /></dt>
                <dd className={styles.description}>FiAlertCircle</dd>

                <dt className={styles.term}><FiArchive /></dt>
                <dd className={styles.description}>FiArchive</dd>

                <dt className={styles.term}><FiArrowUpRight /></dt>
                <dd className={styles.description}>FiArrowUpRight</dd>

                <dt className={styles.term}><FiCalendar /></dt>
                <dd className={styles.description}>FiCalendar</dd>

                <dt className={styles.term}><FiCheckCircle /></dt>
                <dd className={styles.description}>FiCheckCircle</dd>

                <dt className={styles.term}><FiCircle /></dt>
                <dd className={styles.description}>FiCircle</dd>

                <dt className={styles.term}><FiCopy /></dt>
                <dd className={styles.description}>FiCopy</dd>

                <dt className={styles.term}><FiEdit /></dt>
                <dd className={styles.description}>FiEdit</dd>

                <dt className={styles.term}><FiEdit2 /></dt>
                <dd className={styles.description}>FiEdit2</dd>

                <dt className={styles.term}><FiEdit3 /></dt>
                <dd className={styles.description}>FiEdit3</dd>

                <dt className={styles.term}><FiFile /></dt>
                <dd className={styles.description}>FiFile</dd>

                <dt className={styles.term}><FiGrid /></dt>
                <dd className={styles.description}>FiGrid</dd>

                <dt className={styles.term}><FiList /></dt>
                <dd className={styles.description}>FiList</dd>

                <dt className={styles.term}><FiLoader /></dt>
                <dd className={styles.description}>FiLoader</dd>

                <dt className={styles.term}><FiMinusSquare /></dt>
                <dd className={styles.description}>FiMinusSquare</dd>

                <dt className={styles.term}><FiPlusSquare /></dt>
                <dd className={styles.description}>FiPlusSquare</dd>

                <dt className={styles.term}><FiRefreshCw /></dt>
                <dd className={styles.description}>FiRefreshCw</dd>

                <dt className={styles.term}><FiSave /></dt>
                <dd className={styles.description}>FiSave</dd>

                <dt className={styles.term}><FiStar /></dt>
                <dd className={styles.description}>FiStar</dd>

                <dt className={styles.term}><FiTag /></dt>
                <dd className={styles.description}>FiTag</dd>

                <dt className={styles.term}><FiTrash /></dt>
                <dd className={styles.description}>FiTrash</dd>

                <dt className={styles.term}><FiX /></dt>
                <dd className={styles.description}>FiX</dd>

                <dt className={styles.term}><FiXCircle /></dt>
                <dd className={styles.description}>FiXCircle</dd>
            </dl>
        </>
    );
}

export default IconsTest;