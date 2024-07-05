import React from 'react'

function Logo({width='100px'}) {
  return (
    <div className="flex items-center">
      <img src="/blog.png" alt="Blog" />
      <span className="ml-3 text-xl font-bold">BlogHeaven</span>
    </div>
  )
}

export default Logo