import { useState } from 'react';
import Task from '@/components/Task';
import styles from '../styles/Home.module.css';

// const getTaskListData = () => {



//     // return taskListData;
// }

const getTaskList = () => {

    const taskListJSON = [
        {
            "id": 1,
            "title": "Lorem Ipsum",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "completed": false,
            "category": "Work",
            "dueDate": "2023-05-02",
            "createdAt": "2023-04-23",
            "createdBy": "Vinicius"
        },
        {
            "id": 2,
            "title": "The Quick Brown Fox",
            "description": "The quick brown fox jumps over the lazy dog",
            "completed": true,
            "category": "Personal",
            "dueDate": "2023-12-31",
            "createdAt": "2023-04-22",
            "createdBy": "Vinicius"
        }
    ]

    const taskList = [];

    taskListJSON.forEach(task => {

        const [completed, toogleCompleted] = useState(task.completed);

        taskList.push(
            <Task
                completed={completed}
                title={task.title}
                description={task.description}
                category={task.category}
                dueDate={task.dueDate}
                createdAt={task.createdAt}
                createdBy={task.createdBy}
                toogleCompleted={(event) => toogleCompleted(event.target.checked)}
            />
        );

    })

    return taskList;

};

const TaskList = () => {

    const taskList = getTaskList();

    return (
        <div className={styles.taskList}>
            <h1 className={styles.title}>Task List</h1>
            {taskList}
        </div>
    );
}

export default TaskList;