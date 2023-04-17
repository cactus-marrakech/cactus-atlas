import React, { useContext } from 'react'
import shadow from "../assets/imags/shadow.png"

import cactuses from "../assets/cactusImages/import"
import pots from "../assets/potsImages/import"
import { ControlersContext } from '../Context/ControlersContext'

function PlantViewr() {
   const {pot,cactus}=useContext(ControlersContext);
  return (
    <div className='flex-1 h-full flex justify-center items-end pb-16'>
        <div className='relative w-[400px] flex flex-row justify-center items-center'>
            <img draggable={false} className='w-[250px] absolute top-[230px] opacity-60 z-[0]' src={shadow}></img>
            <img draggable={false} className='h-[300px] absolute ' src={pots[pot]}></img>
            <img draggable={false} className='h-[300px] opacity-0' src={pots[pot]}></img>
            <img draggable={false} className='w-[300px] absolute top-[-160px] ' src={cactuses[cactus]}></img>
        </div>
    </div>
  )
}

export default PlantViewr