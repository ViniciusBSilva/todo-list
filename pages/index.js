import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>To-do List | Home</title>
        <meta name="description" content="To-do List" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <h1 className={styles.title}>Tasks</h1>
        <div className="taksList">
          <div className="task" id='1'>
            <h2 className="taskTitle">Task 1 Title</h2>
            <p className="taskDescription">Task 1 Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto fuga dignissimos ratione, aspernatur natus, autem rerum aliquam magnam ipsum fugit eaque laborum sequi eos sed recusandae at in saepe?</p>
            <p className="taskDueDate">Due Date: 2023-04-23</p>
            <p className="taskInfo">Created at 2023-04-22 by Vinicius</p>
          </div>
          <div className="task" id='2'>
            <h2 className="taskTitle">Task 2 Title</h2>
            <p className="taskDescription">Task 2 Description. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est iusto fuga dignissimos ratione, aspernatur natus, autem rerum aliquam magnam ipsum fugit eaque laborum sequi eos sed recusandae at in saepe?</p>
            <p className="taskDueDate">Due Date: 2023-04-23</p>
            <p className="taskInfo">Created at 2023-04-22 by Vinicius</p>
          </div>
        </div>
      </main>
    </>
  )
}
