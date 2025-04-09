const API_KEY  = '4287ad07'

export const searchMovies = async ({search}) =>{
    if(search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`);
        const json = await response.json();
        const movies = json.Search
        console.log(`https://www.omdbapi.com/?apikey=${API_KEY}&s= ${search}`)
        console.log("seacg",search);

        console.log(json);

        return movies?.map(movie => ({
            id: movie.imdbID,
            title:movie.Title,
            poster: movie.Poster,
            year: movie.Year
        
        }));

    } catch (e) {
        throw new Error('Error Buscando movies');
    }
}