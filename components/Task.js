import { useState } from 'react';
import styles from '../styles/Home.module.css'

const Task = ({ completed, title, description, category, dueDate, createdAt, createdBy, toogleCompleted }) => {

    const [showDetail, toogleDetail] = useState(false);

    return (
        <>
            <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <input
                        name='taskCompleted'
                        type='checkbox'
                        checked={completed}
                        onChange={toogleCompleted}
                    />
                    <label
                        htmlFor='taskCompleted'
                        className={`${styles.taskTitle}`.concat((completed) ? ` ${styles.taskCompleted}` : '')}>
                        <h2>{title}</h2>
                    </label>
                    <p className={styles.showDetails} onClick={() => toogleDetail(!showDetail)}>
                        {showDetail ? '-' : '+'}
                    </p>
                </div>
                {showDetail && (
                    <div className={styles.taskDetails}>
                        <p className={styles.taskDescription}>{description}</p>
                        <p className={styles.taskDueDate}>Due Date: {dueDate}</p>
                        <p className={styles.taskInfo}>Created at {createdAt} by {createdBy}</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default Task;