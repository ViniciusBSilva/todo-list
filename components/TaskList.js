import { useState, useEffect } from 'react';
import Task from '@/components/Task';
import styles from '../styles/Home.module.css';

const getTaskList = (taskListJSON) => {

    const taskList = [];

    taskListJSON.forEach(task => {

        taskList.push(
            <Task
                key={task.id}
                taskData={task}
            />
        );

    })

    return taskList;

};

const TaskList = () => {

    const [taskList, setTaskList] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/tasks')
            .then(res => res.json())
            .then(jsonData => setTaskList(getTaskList(jsonData)));

    }, []);

    return (
        <div className={styles.taskList}>
            <h1 className={styles.title}>Task List</h1>
            {taskList}
        </div>
    );
}

export default TaskList;