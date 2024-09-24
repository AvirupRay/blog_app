import React from 'react'

const Header = () => {
  return (
    <div className=' flex items-center justify-between px-10 p-5 '>
        <div className=' font-bold font-mono text-2xl select-none'>BlogO</div>
        <button className='border-2 border-white p-2 shadow-[-6px_6px_0px_#fff] active:shadow-[-3px_3px_0px_#fff] font-semibold'>Get Started</button>
    </div>
  )
}

export default Header