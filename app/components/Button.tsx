import React from 'react'
import Image from 'next/image'
interface buttonProps{
    type:'button'| 'submit',
    title:string,
    icon?:string,
    variant:string
    full:boolean
}

function Button({type, title, icon, variant, full}:buttonProps) {
  return (
    <button
         className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
        type={type}>
            {icon && <Image 
            src={icon} alt={title} width={24} height={24}/>}
            <label className='text-[16px] font-[700] whitespace-nowrap cursor-pointer'>{title}</label>
    </button>
  )
}

export default Button