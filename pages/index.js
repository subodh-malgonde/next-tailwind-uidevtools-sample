import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Card(props){
  return (
    <a href={props.link} className="p-6 border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 rounded-xl">
      <h3 className="mb-4 text-2xl">{props.title} &rarr;</h3>
      <p className="text-xl leading-normal">{props.text}</p>
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 w-full md:max-w-4xl mt-12">
          <Card title="Documentation"
                link="https://nextjs.org/docs"
                text="Find in-depth information about Next.js features and API."/>

          <Card title="Learn"
                link="https://nextjs.org/learn"
                text="Learn about Next.js in an interactive course with quizzes!"/>

         <Card title="Examples"
                link="https://github.com/vercel/next.js/tree/master/examples"
                text="Discover and deploy boilerplate example Next.js projects."/>

         <Card title="Deploy"
                link="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                text="Instantly deploy your Next.js site to a public URL with Vercel."/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
