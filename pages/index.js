
import { useState } from 'react';

import Head from 'next/head';

import Task from '@/components/Task';

import styles from '../styles/Home.module.css';

export default function Home() {

  const getTaskList = () => {

    const taskListJSON = [
      {
        "id": 1,
        "title": "Lorem Ipsum",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "completed": false,
        "category": "Work",
        "dueDate": "2023-05-02",
        "createdAt": "2023-04-23",
        "createdBy": "Vinicius"
      },
      {
        "id": 2,
        "title": "The Quick Brown Fox",
        "description": "The quick brown fox jumps over the lazy dog",
        "completed": true,
        "category": "Personal",
        "dueDate": "2023-12-31",
        "createdAt": "2023-04-22",
        "createdBy": "Vinicius"
      }
    ]

    const taskList = [];

    // const [showDetail, toogleDetail] = useState(false);

    taskListJSON.forEach(task => {

      const [completed, toogleCompleted] = useState(task.completed);

      taskList.push(
        <Task
          completed={completed}
          title={task.title}
          description={task.description}
          category={task.category}
          dueDate={task.dueDate}
          createdAt={task.createdAt}
          createdBy={task.createdBy}
          // showDetail={showDetail}
          toogleCompleted={(event) => toogleCompleted(event.target.checked)}
        // toogleDetail={() => toogleDetail(!showDetail)}
        />
      );

    })

    return taskList;

  };

  const taskList = getTaskList();

  return (
    <>
      <Head>
        <title>To-do List | Home</title>
        <meta name="description" content="To-do List" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <div className={styles.taskList}>
          <h1 className={styles.title}>Task List</h1>
          {/* <div className={styles.task}>
            <div className={styles.taskHeader}>
              <input name='taskCompleted' type='radio' />
              <label htmlFor='taskCompleted' className={styles.taskTitle}>
                <h2 >Task 1 Title</h2>
              </label>
            </div>
            <div className={styles.taskDetails}>
              <p className={styles.taskDescription}>Task 1 Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto fuga dignissimos ratione, aspernatur natus, autem rerum aliquam magnam ipsum fugit eaque laborum sequi eos sed recusandae at in saepe?</p>
              <p className={styles.taskDueDate}>Due Date: 2023-04-23</p>
              <p className={styles.taskInfo}>Created at 2023-04-22 by Vinicius</p>
            </div>
          </div>
          <div className={styles.task}>
            <div className={styles.taskHeader}>
              <input name='taskCompleted' type='radio' checked />
              <label htmlFor='taskCompleted' className={`${styles.taskTitle} ${styles.taskCompleted}`}>
                <h2 >Task 2 Title</h2>
              </label>
            </div>
            <div className={styles.taskDetails}>
              <p className={styles.taskDescription}>Task 2 Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto fuga dignissimos ratione, aspernatur natus, autem rerum aliquam magnam ipsum fugit eaque laborum sequi eos sed recusandae at in saepe?</p>
              <p className={styles.taskDueDate}>Due Date: 2023-04-23</p>
              <p className={styles.taskInfo}>Created at 2023-04-22 by Vinicius</p>
            </div>
          </div> */}

          {taskList}
        </div>
      </main >
    </>
  )
}
