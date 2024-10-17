import React from 'react'

const Header = () => {
  return (
    <>
        <header className='flex justify-between h-14 bg-red-800 items-center text-yellow-50 text-xl'>
            <h1 className='ml-1'>Next.js Assignmnet</h1>
            <h1>(GIAIC)</h1>
            <ul className='flex gap-3 mr-1.5'>
            <li>CSR</li>
            <li>SSR</li>
            <li>SSG</li>
            <li>ISR</li>
            </ul>
        </header>
    </>
  )
}

export default Header