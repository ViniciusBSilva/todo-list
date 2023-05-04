import TaskDetail from "@/components/TaskDetail";
import styles from '@/styles/Home.module.css';

const TaskDetailsPage = () => {

    const data = {
        "id": 1,
        "title": "Lorem Ipsum",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "completed": false,
        "category": "Work",
        "dueDate": "2023-05-02",
        "createdAt": "2023-04-23",
        "createdBy": "Vinicius"
    }

    return (
        <>
            <TaskDetail
                taskData={data}
            />
            <div className="btnLine">
                <button className={styles.btnDelete}>Delete task</button>
            </div>

        </>
    );
}

export default TaskDetailsPage;