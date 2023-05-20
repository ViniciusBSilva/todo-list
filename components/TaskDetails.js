import styles from '../styles/TaskDetails.module.css'

const TaskDetails = ({ description, dueDate, createdAt, createdBy }) => {
    return (

        <div className={styles.detailsContainer}>
            <p className={styles.description}>{description}</p>
            <p className={styles.dueDate}>Due Date: {dueDate}</p>
            <p className={styles.info}>Created at {createdAt} by {createdBy}</p>
        </div>

    );
}

export default TaskDetails;