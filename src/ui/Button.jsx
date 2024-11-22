import React from 'react'

export default function Button({children, onClick, className}) {
  return (
    <button 
      onClick={onClick}  
      className={`bg-red-500 uppercase font-normal text-[12px] px-4 py-2 rounded-lg hover:bg-red-400 m-1 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${className || ''}`}
    >
      {children}
    </button>
  )
}