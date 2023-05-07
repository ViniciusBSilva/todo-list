import TaskDetailView from "@/components/TaskDetailView";
import styles from '@/styles/Home.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TaskDetailsPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [taskData, setTaskData] = useState({});

    const handleEdit = () => {

    }

    const handleDelete = () => {

        fetch(`http://localhost:3000/api/tasks?id=${id}`, {
            method: "DELETE"
        }).then(() => {
            console.log('Task Deleted');
            router.replace("/")
        })

    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/api/tasks?id=${id}`)
                .then(res => res.json())
                .then(jsonData => setTaskData(jsonData));
        }
    }, [id]);

    return (
        <>
            <TaskDetailView
                taskData={taskData}
            />
            <div className={styles.taskForm + ' ' + styles.taskFormButtonLine}>
                <button className={styles.btnNormal} onClick={() => handleEdit()}>Edit task</button>
                <button className={styles.btnNormal} onClick={() => handleDelete()}>Delete task</button>
            </div>

        </>
    );
}

export default TaskDetailsPage;