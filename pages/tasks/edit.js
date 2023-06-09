import Head from 'next/head';
import TaskForm from '@/components/TaskForm';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '@/styles/Home.module.css';

const taskEdit = () => {

    const [taskData, setTaskData] = useState({});
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/api/tasks?id=${id}`)
                .then(res => res.json())
                .then(jsonData => {
                    setTaskData(jsonData)
                });
        }
    }, [id]);

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
            "changedAt": currentDate,
        };

        fetch(`http://localhost:3000/api/tasks?id=${id}`, {
            method: "PUT",
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
            "Unsaved data will be lost!")) {
            router.replace(`/tasks/${id}`);
        }

    }

    return (
        <>
            <Head>
                <title>TODOLIST | Edit Task # {id}</title>
            </Head>
            <h1 className={styles.title}>Edit Task</h1>
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



export default taskEdit;