import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="/static"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Static <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Api call in Static Component
          </p>
        </a>

        <a
          href="/server"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Server <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Api call in Server Component</p>
        </a>

        <a
          href="/client"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Client <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Api call in Client Component
          </p>
        </a>

        <a
          href="/parallel"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Parallel <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Parallel Api call
          </p>
        </a>
        <a
          href="/sequential"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Sequential <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Sequential API Call
          </p>
        </a>

      </div>
    </main>
  )
}
