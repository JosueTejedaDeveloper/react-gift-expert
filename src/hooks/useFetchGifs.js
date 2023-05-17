import { useEffect, useState } from "react";
import { getGifts } from "../helper/getGifs";


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    //creamos una funcion 
    const getImages = async() =>{
        const newImages = await getGifts(category);
        setImages( newImages  );
        setIsLoading( false );
    }

    useEffect( () => {
       getImages();
    }, [])
    
    return{
        images,
        isLoading
    }
}
