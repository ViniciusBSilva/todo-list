import Head from 'next/head';
import TaskDetailView from "@/components/TaskDetailView";
import styles from '@/styles/Home.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const TaskDetailsPage = () => {

    const router = useRouter();
    const { id } = router.query;

    const [taskData, setTaskData] = useState({});

    const handleEdit = () => {
        router.replace(`/tasks/edit?id=${id}`);
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
            <Head>
                <title>To-do List | View Task # {id}</title>
            </Head>
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