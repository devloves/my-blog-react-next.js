import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>      
        <h3>A little about me</h3>
        Hello i am Devster aka Dev, and yes i am a Full stack web Developer, and this website is made it Next.js a React Framework which has
        static Generation [ Pre component rendering ]
        <br />
        <h3>Find Me on</h3>
        <div className={utilStyles.socials}>
        <i class="fa fa-github"></i>
        <i class="fa fa-dribbble"></i>
        <i class="fa fa-envelope"></i>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={'/posts/'+ id}><a>{title}</a></Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}