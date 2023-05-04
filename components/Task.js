import { useState } from 'react';
import styles from '../styles/Home.module.css'

const Task = ({ taskData }) => {

    const [showDetail, toogleDetail] = useState(false);

    const [isCompleted, toogleCompleted] = useState(taskData.completed);

    return (
        <>
            <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <input
                        name='taskCompleted'
                        type='checkbox'
                        checked={isCompleted}
                        onChange={(event) => toogleCompleted(event.target.checked)}
                    />
                    <label
                        htmlFor='taskCompleted'
                        className={`${styles.taskTitle}`.concat((isCompleted) ? ` ${styles.taskCompleted}` : '')}>
                        <h2>{taskData.title}</h2>
                    </label>
                    <p className={styles.showDetails} onClick={() => toogleDetail(!showDetail)}>
                        {showDetail ? '-' : '+'}
                    </p>
                </div>
                {showDetail && (
                    <div className={styles.taskDetails}>
                        <p className={styles.taskDescription}>{taskData.description}</p>
                        <p className={styles.taskDueDate}>Due Date: {taskData.dueDate}</p>
                        <p className={styles.taskInfo}>Created at {taskData.createdAt} by {taskData.createdBy}</p>
                    </div>
                )}

            </div>
        </>
    );
}

export default Task;