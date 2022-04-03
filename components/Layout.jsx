import React from 'react'
import {Header} from './'
import {NewsLetter} from './'
const Layout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
        <NewsLetter/>
    </>
  )
}

export default Layout