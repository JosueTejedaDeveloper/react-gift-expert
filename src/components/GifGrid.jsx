import { useEffect, useState } from 'react';
import { getGifts } from '../helper/getGifs';
import  { GifItem } from '../components/GifItem'; 
 import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {


    const { images, isLoading } = useFetchGifs( category );
 

    

  return (
    <>
    <h3>{ category }</h3>
    {
       isLoading && <h2>Cargando...</h2>
    }
   
    {/* {
        gifs.map(gif=> (
            <p>{ gif }</p>
        ))
    } */}
    <div className='card-grid'>
     {
        images.map( ( img )=>(
          <GifItem key={ img.id } { ...img } />
        ))
     }
    </div>
    </>
  )
}
