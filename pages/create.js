import TaskForm from '@/components/TaskForm';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const taskCreate = () => {

    const state = {
        // "id": 2,
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

    // const handleInputChange = ({ target: { name, value } }) => {
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
        console.log("handleSubmit taskData", taskData);
        e.preventDefault();

        setIsPending(true);

        const currentDate = new Date()
            .toLocaleDateString('en-CA', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        console.log("currentDate", currentDate);
        const newTaskData = {
            ...taskData,
            "createdAt": currentDate,
            "changedAt": currentDate,
        };

        fetch(`http://localhost:3000/api/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTaskData)
        }).then(() => {
            console.log("task created");
            setIsPending(false);
            router.back();
        })

    }


    return (
        <>
            <h1 className={styles.title}>New Task</h1>
            <TaskForm
                taskData={taskData}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                isPending={isPending}
            />
        </>
    );
}



export default taskCreate;