import React from 'react'

const Layout = ({children}) => {
  return (
    <div className=' mx-auto container max-w-[100%] md:max-w-[85%]'>{children}</div>
  )
}

export default Layout