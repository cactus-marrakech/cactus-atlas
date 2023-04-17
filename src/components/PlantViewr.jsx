import React from 'react'
import pot from "../assets/potsImages/2.png"
import cactus from "../assets/cactusImages/3.png"
import shadow from "../assets/imags/shadow.png"
function PlantViewr() {
  return (
    <div className='flex-1 h-full flex justify-center items-end pb-16'>
        <div className='relative w-[400px] flex flex-row justify-center items-center'>
            <img draggable={false} className='w-[250px] absolute top-[230px] opacity-60 z-[0]' src={shadow}></img>
            <img draggable={false} className='h-[300px] absolute ' src={pot}></img>
            <img draggable={false} className='h-[300px] opacity-0' src={pot}></img>
            <img draggable={false} className='w-[300px] absolute top-[-160px] ' src={cactus}></img>
        </div>
    </div>
  )
}

export default PlantViewr