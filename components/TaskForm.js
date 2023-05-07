import styles from '@/styles/Home.module.css';
const TaskForm = ({ taskData, handleInputChange, handleSubmit, isPending }) => {
    return (
        <div className={styles.taskFormContainer}>
            <form className={styles.taskForm} onSubmit={handleSubmit}>
                <p className={styles.taskFormLineColumn}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={taskData.title}
                        onChange={handleInputChange}
                    />
                </p>
                <p className={styles.taskFormLineColumn}>
                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={handleInputChange}
                        value={taskData.description}
                    />
                </p>
                <p className={styles.taskFormLineColumn + ' ' + styles.taskFormLineInline}>
                    <input
                        type="checkbox"
                        name="completed"
                        id="completed"
                        checked={taskData.completed}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='completed'>Completed</label>
                </p>
                <p className={styles.taskFormLineColumn}>
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={taskData.category}
                        onChange={handleInputChange}
                    />
                </p>
                <p className={styles.taskFormLineColumn}>
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        value={taskData.dueDate}
                        onChange={handleInputChange}
                    />
                </p>
                <p className={styles.taskFormLineColumn}>
                    <label htmlFor="createdBy">Created By</label>
                    <input
                        type="text"
                        name='createdBy'
                        id='createdBy'
                        value={taskData.createdBy}
                        onChange={handleInputChange}
                    />
                </p>
                <p className={
                    styles.taskFormLineColumn +
                    ' ' +
                    styles.taskFormButtonLine}
                >
                    {!isPending && <button className={styles.btnHighlight}>Save</button>}
                    {isPending && <button className={styles.btnHighlight} disabled>Saving...</button>}
                    <button type='reset' className={styles.btnNormal}>Cancel</button>
                </p>
            </form>
        </div>
    );
}

export default TaskForm;