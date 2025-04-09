function ListofMovies ({movies}) {


  return(
    <ul className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {movies.map(movie => (
        <li className='w-1/8' key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.title} />
        </li>
      ))}
    </ul>
    
  )
}
  
function NoMoviesResult() {
    return(
        <p>No se encontraron peliculas</p>
    )
}

export function Movies ({movies}){
    const hasmovies = movies?.length > 0
    
    return(
        hasmovies ? 
        <ListofMovies movies={movies}/> :
        <NoMoviesResult/>
    )
} 
