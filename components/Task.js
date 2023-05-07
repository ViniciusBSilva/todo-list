import { useState } from 'react';

import Link from 'next/link';

import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

import styles from '../styles/Home.module.css'

const Task = ({ taskData }) => {

    const [showDetail, toogleDetail] = useState(false);

    const [isCompleted, toogleCompleted] = useState(taskData.completed);
    const [isPending, setIsPending] = useState(false);

    const handleCompleted = (isCompleted) => {
        setIsPending(true);

        fetch(`http://localhost:3000/api/tasks?id=${taskData.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "completed": isCompleted })
        })
            .then(() => {
                setIsPending(false);
                toogleCompleted(isCompleted);
            })

    }

    return (
        <>
            <div className={styles.task}>
                <div className={styles.taskHeader}>
                    <input
                        name='taskCompleted'
                        type='checkbox'
                        checked={isCompleted}
                        disabled={isPending}
                        onChange={(event) => handleCompleted(event.target.checked)}
                    />
                    <label
                        htmlFor='taskCompleted'
                        className={`${styles.taskTitle}`.concat((isCompleted) ? ` ${styles.taskCompleted}` : '')}>
                        <h2>{taskData.title}</h2>
                    </label>
                    <p className={styles.taskListButtons}>
                        <span
                            className={styles.taskListButtonsItem}
                        >
                            <Link href={`tasks/${taskData.id}`}>
                                <FiArrowUpRight />
                            </Link>
                        </span>
                        <span
                            className={styles.taskListButtonsItem}
                            onClick={() => toogleDetail(!showDetail)}
                        >
                            {showDetail ? <FiMinusSquare /> : <FiPlusSquare />}
                        </span>
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