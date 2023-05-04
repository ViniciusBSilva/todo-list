import Head from 'next/head';
import TaskList from '@/components/TaskList';

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
        <TaskList />
      </main >
    </>
  )
}
