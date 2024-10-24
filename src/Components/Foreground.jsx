import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
const ref = useRef(null)

  const data =[
    {
      desc:"this is the dynamic description for the rendering card in the docs.",
      filesize:".9mb",
      close: true,
      tag:{isOpen: false, tagTitle: "Upload", tagColor: "green"},
    },
    {
      desc:"this is the dynamic description for the rendering card in the docs.",
      filesize:".9mb",
      close: false,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
      desc:"this is the dynamic description for the rendering card in the docs.",
      filesize:".9mb",
      close: false,
      tag:{isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 p-5 flex-wrap'>
    {
       data.map((item, index) =>(
        < Card data= {item} reference={ref}/>
       ))
    }
    </div>
  )
}

export default Foreground