import React from 'react'

const Layout = ({children}) => {
  return (
    <div className=' mx-auto container max-w-[80%]'>{children}</div>
  )
}

export default Layout