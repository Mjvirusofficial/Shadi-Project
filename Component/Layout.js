import Head from 'next/head'
import Navbar from './Navbar/Navbar'

function Layout({children,title}) {
  return (
    <div>
        <Navbar/>
        <Head>
            <title>{title}</title>
        </Head>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout