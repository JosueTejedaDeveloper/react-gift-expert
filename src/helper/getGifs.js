
//ESTO ES CONSIDERADO UNA BUENA PRACTICA.
export const getGifts = async ( category ) =>{
    const key = '8lnLevQ6xCk3ulnHm7MXEmtPa8RI5KUa';
    const url= `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`;

    const resp = await fetch(url);

    const { data } = await resp.json();
    //console.log(data);

    const gifs = data.map(  img =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url

    }));
    console.log(gifs);
    return gifs;
}
