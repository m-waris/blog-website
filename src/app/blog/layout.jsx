import React from 'react'

export default function BlogLayout({ children}) {
  return (
    <>
        <h2>Header</h2>
        {children}
        <div>Footer</div>
    </>
  )
}
