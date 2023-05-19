import Head from 'next/head';
import TaskForm from '@/components/TaskForm';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

const taskCreate = () => {

    const state = {
        "title": "",
        "description": "",
        "completed": false,
        "category": "",
        "dueDate": "",
        "createdAt": "",
        "createdBy": ""
    }

    const [taskData, setTaskData] = useState(state);
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const handleInputChange = ({ target }) => {

        let newValue = target.value;

        if (target.name === "completed") {
            newValue = target.checked ? true : false;
        }

        setTaskData({
            ...taskData,
            [target.name]: newValue
        });

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsPending(true);

        const currentDate = new Date()
            .toLocaleDateString('en-CA', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });

        const newTaskData = {
            ...taskData,
            "createdAt": currentDate,
            "changedAt": currentDate,
        };

        fetch(`http://localhost:3000/api/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTaskData)
        })
            .then(res => res.json())
            .then((jsonData) => {
                setIsPending(false);
                router.replace(`/tasks/${jsonData.id}`);
            })

    }

    const handleCancel = () => {
        if (confirm("Are you sure you want to leave without saving? \n\n" +
            "Data will be lost!")) {
            router.back();
        }
    }

    return (
        <>
            <Head>
                <title>TODOLIST | New Task</title>
            </Head>
            <h1 className={styles.title}>New Task</h1>
            <TaskForm
                taskData={taskData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                isPending={isPending}
            />
        </>
    );
}



export default taskCreate;