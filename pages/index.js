import Head from 'next/head';
import TaskList from '@/components/TaskList';
import Sidebar from "@/components/CategorieList";

import styles from '@/styles/Home.module.css';

export default function Home() {

  return (
    <>
      <Head>
        <title>TODOLIST | Home</title>
        <meta name="description" content="To-do List" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.container}>
        <Sidebar />
        <TaskList />
      </main>
    </>
  )
}
