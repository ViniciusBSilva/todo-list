import { useState } from 'react';

import Link from 'next/link';

import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

import { FiCircle } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

import styles from '../styles/Task.module.css'

import ClickableIcon from './ClickableIcon';
import TaskDetails from './TaskDetails';
import Category from './Category';

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
        <div className={styles.container}>

            <div className={styles.taskHeader}>

                <div className={styles.line}>

                    <div className={styles.lineBegin}>
                        <ClickableIcon
                            onClick={() => handleCompleted(!isCompleted)}
                        >
                            {isCompleted ? <FiCheckCircle /> : <FiCircle />}
                        </ClickableIcon>
                    </div>

                    <div className={styles.titleContainer}>
                        <label
                            htmlFor='taskCompleted'
                            className={isCompleted && ` ${styles.completedTitle}`}>
                            <h2>{taskData.title}</h2>
                        </label>
                    </div>

                    <div className={styles.lineEnd}>
                        <Link href={`tasks/${taskData.id}`}>
                            <ClickableIcon>
                                <FiArrowUpRight />
                            </ClickableIcon>
                        </Link>

                        <ClickableIcon
                            onClick={() => toogleDetail(!showDetail)}
                        >
                            {showDetail ? <FiMinusSquare /> : <FiPlusSquare />}
                        </ClickableIcon>
                    </div>

                </div>

                <div className={styles.line}>

                    <div className={styles.lineBegin}>
                        <Category
                            name={taskData.category}
                        />
                    </div>

                </div>

            </div>

            {
                showDetail &&
                <TaskDetails
                    description={taskData.description}
                    dueDate={taskData.dueDate}
                    createdAt={taskData.createdAt}
                    createdBy={taskData.createdBy}
                />
            }

        </div>
    );
}

export default Task;