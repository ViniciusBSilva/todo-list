import TaskDetailView from "@/components/TaskDetailView";
import styles from '@/styles/Home.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TaskDetailsPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [taskData, setTaskData] = useState({});

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
            <div className="btnLine">
                <button className={styles.btnDelete}>Delete task</button>
            </div>

        </>
    );
}

export default TaskDetailsPage;