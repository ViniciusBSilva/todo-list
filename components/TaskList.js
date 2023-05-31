import { useState, useEffect, useMemo } from 'react';
import Task from '@/components/Task';
import styles from '@/styles/TaskList.module.css';

const TaskList = ({ category }) => {

    const [allTasks, setAllTasks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/api/tasks')
            .then(res => res.json())
            .then(jsonData => setAllTasks(jsonData));

    }, []);

    const filteredTasks = useMemo(() => {
        if (category) {
            return allTasks.filter(task => task.category === category);
        }
        return allTasks;
    }, [allTasks, category]);

    return (
        <div className={styles.container}>
            <h1>Task List</h1>
            {filteredTasks.map(task =>
                <Task
                    key={task.id}
                    taskData={task}
                />
            )}
        </div>
    );
}

export default TaskList;