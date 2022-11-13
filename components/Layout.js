import React from 'react';
import Head from 'next/head';

const Layout = ({children}) => {

  return (
    <div>
        <Head>
            <title>Glutenfree shop</title>
        </Head>
        {children}
        <footer>
        </footer>
    </div>
  )
}

export default Layout