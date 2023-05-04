import styles from '@/styles/Home.module.css';

const TaskDetail = ({ taskData }) => {
    return (
        <ul className={styles.taskDetailPropertyList}>
            <li>
                <span className={styles.taskDetailPropertyName}>ID</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.id}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Title</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.title}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Description</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.description}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Completed</span>
                <span className={styles.taskDetailPropertyValue}>{(taskData.completed) ? 'Yes' : 'No'}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Category</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.category}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Due Date</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.dueDate}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Created At</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.createdAt}</span>
            </li>
            <li>
                <span className={styles.taskDetailPropertyName}>Created By</span>
                <span className={styles.taskDetailPropertyValue}>{taskData.createdBy}</span>
            </li>
        </ul>
    );
}

export default TaskDetail;