import Head from 'next/head';
import Content from '@/components/Content';

export default function Home() {

  return (
    <>
      <Head>
        <title>TODOLIST | Home</title>
        <meta name="description" content="To-do List" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Content />

    </>
  )
}
