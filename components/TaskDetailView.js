import styles from '@/styles/Home.module.css';

const TaskDetailView = ({ taskData }) => {

    const taskProperties = [];

    for (const property in taskData) {
        if (Object.hasOwnProperty.call(taskData, property)) {
            const value = taskData[property];
            taskProperties.push(
                <li key={property}>
                    <span className={styles.taskDetailPropertyName}>{property}</span>
                    <span className={styles.taskDetailPropertyValue}>{(typeof value === 'boolean') ? (value ? 'Yes' : 'No') : value}</span>
                </li>
            )
        }
    }

    return (
        <ul className={styles.taskDetailPropertyList}>
            {taskProperties}
        </ul>
    );
}

export default TaskDetailView;