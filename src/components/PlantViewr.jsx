import React from 'react'
import pot from "../assets/potsImages/2.png"
import cactus from "../assets/cactusImages/3.png"
import shadow from "../assets/imags/shadow.png"
function PlantViewr() {
  return (
    <div className='flex-1 h-full flex justify-center items-center'>
        <div className='relative w-fit'>
            <img className='w-[300px] absolute top-[270px] opacity-70 z-[0]' src={shadow}></img>
            <img className='w-[300px] absolute ' src={pot}></img>
            <img className='w-[300px] opacity-0' src={pot}></img>
            <img className='w-[300px] absolute top-[-155px] ' src={cactus}></img>
        </div>
    </div>
  )
}

export default PlantViewr